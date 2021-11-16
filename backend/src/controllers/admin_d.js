const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const Convocatory = require('../db/models/Convocatory');
const Profile = require('../db/models/Profile');
const User = require('../db/models/User');
const Rooms = require('../db/models/Rooms')
const adminRouter = require('express').Router()
const request = require('request');
const InterviewDay = require('../db/models/InterviewDay');
const Administrator = require('../db/models/Administrators');
const Citation = require('../db/models/Citation');

// GET STATISTICS
adminRouter.get('/statistics', async (req, res) => {
        // Busca la convocatoria que se encuentra activa
        const convocatoryData = await Convocatory.find({ status: true })
        // Busca las citaciones para obtener datos de las fechas e inscritos
        const citationData = await Citation.find()
        // Objeto para guardar los campos
        const totalUsers = {
                total: convocatoryData[0].usersRegisted.length,
                residencyDepartment: {},
                women: 0,
                man: 0,
                other: 0,
                totalregistered: 0,
                totalwithCitation: 0,
                totalmigrants: 0,
                interviewed: 0,
                totalPass: 0,
                interviewDays: {},
                remainingToGoal: 0,
                heardFromUs: {}
        }
        for (let citation of citationData) {
                let date = citation.date.toString()
                date = date.split(' ').slice(1, 4).join('-')
                if (totalUsers.interviewDays[date]) {
                        totalUsers.interviewDays[date] += citation.users.length
                } else {
                        totalUsers.interviewDays[date] = citation.users.length
                }
        }
        // Ciclo para extraer la info de cada usuario registrado en la convocatoria
        for (let candidateId of convocatoryData[0].usersRegisted) {
                // Perfil del candidato
                const candidate = await Profile.find({ user_id: candidateId })
                // Total genero: 0-Mujer, 1-Hombre, 2-Otro
                // Busca si la propiedad existe y aumenta 1, sino lo agrega con el valor 1
                //console.log(candidate[0].gender)
                if (candidate[0].gender === 0) {
                        if (totalUsers.women) {
                                totalUsers.women += 1
                        } else {
                                totalUsers.women = 1
                        }
                }
                if (candidate[0].gender === 1) {
                        if (totalUsers.man) {
                                totalUsers.man += 1
                        } else {
                                totalUsers.man = 1
                        }
                }
                if (candidate[0].gender === 2) {
                        if (totalUsers.other) {
                                totalUsers.other += 1
                        } else {
                                totalUsers.other = 1
                        }
                }
                // Total registrados en la convocatoria
                if (candidate[0].status.registered === true) {
                        if (totalUsers.totalregistered) {
                                totalUsers.totalregistered += 1
                        } else {
                                totalUsers.totalregistered = 1
                        }
                }
                // Total citados
                if (candidate[0].status.withCitation === true) {
                        if (totalUsers.totalwithCitation) {
                                totalUsers.totalwithCitation += 1
                        } else {
                                totalUsers.totalwithCitation = 1
                        }
                }
                // Total entrevistados
                if (candidate[0].status.interviewed === true) {
                        if (totalUsers.interviewed) {
                                totalUsers.interviewed += 1
                        } else {
                                totalUsers.interviewed = 1
                        }
                }
                // Total que pasaron el proceso
                if (candidate[0].status.pass === true) {
                        if (totalUsers.totalPass) {
                                totalUsers.totalPass += 1
                        } else {
                                totalUsers.totalPass = 1
                        }
                }
                // Total de departamentos de residencia
                // Si el departamento no existe lo agrega, si existe le suma 1
                // En el objeto residencyDepartment en totalUsers
                const deparment = candidate[0].residencyDepartment
                if (deparment) {
                        if (totalUsers.residencyDepartment[deparment]) {
                                totalUsers.residencyDepartment[deparment] += 1
                        } else {
                                totalUsers.residencyDepartment[deparment] = 1
                        }
                }
                if (candidate[0].status.migrants === true) {
                        if (totalUsers.totalmigrants) {
                                totalUsers.totalmigrants += 1
                        } else {
                                totalUsers.totalmigrants = 1
                        }
                }
                if (candidate[0].heardFromUs) {
                        //console.log(candidate[0].heardFromUs)
                        for (const [key, value] of Object.entries(candidate[0].heardFromUs)) {
                                if (value) {
                                        if (totalUsers.heardFromUs[key]) {
                                                totalUsers.heardFromUs[key] += 1
                                        } else {
                                                totalUsers.heardFromUs[key] = 1
                                        }
                                }
                        }
                }
        }
        // Check how many to remains to goal
        if (totalUsers.totalPass < convocatoryData[0].maxQuotas) {
                const goal = convocatoryData[0].maxQuotas - totalUsers.totalPass
                totalUsers.remainingToGoal = goal
        } else {
                totalUsers.remainingToGoal = 0
        }
        res.json({
                data: totalUsers
        })
})

// CREATES NEW CONVOCATORY
adminRouter.post('/new-conv', async (req, res, next) => {
        // DATA REQUIRED FROM REQUEST
        const { name, initialDate, finalDate, program, maxQuotas, initialBootcampDate, finalBootcampDate } = req.body;
        // New Convocatory document
        const newConvocatory = new Convocatory({ name, initialDate, finalDate, program, maxQuotas, initialBootcampDate, finalBootcampDate });
        await newConvocatory.save();
        res.send({ data: newConvocatory });
})

// UPDATE CONVOCATORY
adminRouter.put('/update-conv/:id', async (req, res) => {
        try {
                const candidate = await Convocatory.findById(req.params.id)
                Object.assign(candidate, req.body)
                candidate.save()
                res.send({ data: candidate })
        } catch {
                res.status(404).send({ error: "Convocatory not found" })
        }
})

// GET PROFILE OF CANDIDATES
adminRouter.get('/candidate-profile/:id', async (req, res) => {
        // Data from de candidate document
        const candidate = await User.find({ user_id: req.params.id })
        // Data from the profile of the candidate
        const candidateProfile = await Profile.find({ user_id: req.params.id })
        // Strucuture for required data 
        const candidateProfileData = {
                "firstName": candidate[0].firstName,
                "middleName": candidate[0].middleName,
                "lastName": candidate[0].lastName,
                "secondSurname": candidate[0].Surname,
                'fullName': `${candidate[0].firstName} ${candidate[0].lastName}`,
                'documentType': candidateProfile[0].documentType,
                'documentNumber': candidateProfile[0].documentNumber,
                "email": candidate[0].email,
                'contactNumber': candidate[0].contactNumber,
                'nacionality': candidateProfile[0].nacionality,
                "residenceCountry": candidateProfile[0].residenceCountry,
                'residencyDepartment': candidateProfile[0].residencyDepartment,
                'municipalityOfResidency': candidate[0].municipalityOfResidency,
                'socioeconomicStratus': candidateProfile[0].socioeconomicStratus,
                'actualAge': candidateProfile[0].actualAge,
                'gender': candidateProfile[0].gender,
                'status': 'true',
                "secondContactNumber": candidateProfile[0].secondContactNumber,
                "locationInBogota": candidateProfile[0].locationInBogota,
                "migrant": candidateProfile[0].migrant,
                "livesInColombia": candidateProfile[0].livesInColombia,
                "address": candidateProfile[0].address,
                "maritalStatus": candidateProfile[0].maritalStatus,
                "academicLevel": candidateProfile[0].academicLevel,
                "degreeTitle": candidateProfile[0].degreeTitle,
                "currentOccupation": candidateProfile[0].currentOccupation,
                "unemployedTime": candidateProfile[0].unemployedTime,
                "formaltOccupation": candidateProfile[0].formalOccupation,
                "victimArmedConflict": candidateProfile[0].victimArmedConflict,
                "pcAccess": candidateProfile[0].pcAccess,
                "programataPrevoiousTimes": candidateProfile[0].programataPrevoiousTimes,
                "motivation": candidateProfile[0].motivation,
                "dreams": candidateProfile[0].dreams,
                "soloLearnProfile": candidateProfile[0].soloLearnProfile,
        }
        res.send({
                data: {
                        candidateProfileData
                }
        })
})

// CREATE RESULTS
adminRouter.post('/new-result', async (req, res) => {
        try {

                // Viariables destructuring from req.body
                const { user_id, htmlScore, cssScore, javascriptScore, pythonScore, soloLearnScore, personalProfileScore, motivationScore, finalScore, pass } = req.body;
                // Viariables destructuring from user names

                const candidate = await User.findById(user_id)
                const { firstName, middleName, lastName, secondSurname } = candidate
                // Creating full name
                const fullName = `${firstName} ${middleName} ${lastName} ${secondSurname}`

                // Creating new Result document
                const newResult = new Result({ user_id, fullName, htmlScore, cssScore, javascriptScore, pythonScore, soloLearnScore, personalProfileScore, motivationScore, finalScore, pass });
                console.log(newResult)
                // Saving new document to Reults 
                await newResult.save();
                res.send({ data: newResult });
        } catch {
                res.status(404).send({ error: "Candidate not found" })
        }
})

// GET THE RESULTS OF CANDIDATE
adminRouter.get('/get-result/:id', async (req, res) => {
        try {
                const { user_id } = req.params.id;
                const candidateProfile = await Profile.find({ user_id: user_id })
                let { soloLearnProfile } = candidateProfile[0]

                // Fetching Solo learn data
                try {
                        request(`https://api.sololearn.repl.co/profile/${soloLearnProfile}`, (err, response, body) => {
                                if (!err) {
                                        const candidate = JSON.parse(body);
                                        scores = candidate.coursesProgress.map(course => [course.courseName, course.progress])
                                        const objScores = Object.fromEntries(scores)
                                        res.json({ data: objScores })
                                }
                        }
                        )
                } catch {
                        res.json({ error: 'Error fetching data' })
                }
        } catch {
                res.status(404).send({ error: "Candidate not found" })
        }
})


// PUT OF CANDIDATE PASSES
// Recibe el user_id, y los objetos de la parte que se desee actualizar
// candidate actualiza los datos basicos del registro
// profile actualiza los datos del formulario
adminRouter.put('/update-candidate', async (req, res) => {
        try {
                const { user_id, candidate, profile } = req.body
                if (candidate) {
                        const candidate = await User.updateMany({ user_id: user_id }, {
                                $set: req.body.candidate
                        })
                }
                if (profile) {
                        const candidateProfile = await Profile.updateMany({ user_id: user_id }, {
                                $set: req.body.profile
                        })
                }
                res.send({ data: candidate })
        } catch {
                res.status(404).send({ error: "Candidate not found" })
        }

})

// GET THE LIST OF CANDIDATES IN WAIT LIST
adminRouter.get('/waiting-list', async (req, res, next) => {
        const waitList = await Profile.find({ status: { 'waitList': true } })
        res.send({ data: waitList })
})

// GET INTERVIEW QUESTIONS
// Get the specific questions for a candidate
adminRouter.get('/interview/:id', async (req, res, next) => {
        const candidateInterview = await InterviewDay.find({ 'user_id': req.params.id })
        const { interview } = candidateInterview[0]
        res.json({
                data: interview
        })
})

// GET ASSESMENT QUESTIONS
// Get the specific questions for a candidate
adminRouter.get('/assesment/:id', async (req, res, next) => {
        const candidateAssesment = await InterviewDay.find({ 'user_id': req.params.id })
        const { assesment } = candidateAssesment[0]
        res.json({
                data: assesment
        })
})

// UPDATE INTERVIEW / ASSESMENT SCORES
// Depending of the data received from request updates interview or assesment scores
adminRouter.put('/update-interview', async (req, res) => {
        try {
                const { user_id, interview, assesment } = req.body
                let resultInterview
                let resultAssesment
                // When interview data is received
                if (interview) {
                        const interviewScore = await InterviewDay.updateMany({ 'user_id': user_id }, {
                                $set: {
                                        interview: interview
                                }
                        })
                        const { motivation, perseverance, planning, tecnique } = interview
                        // REFACTORIZAR
                        resultInterview = (motivation.question1.score + motivation.question2.score + perseverance.question1.score + perseverance.question2.score + planning.question1.score + planning.question2.score + tecnique.question1.score + tecnique.question2.score) / 8
                        const score = await InterviewDay.updateMany({ 'user_id': user_id }, {
                                $set: {
                                        interviewScore: resultInterview
                                }
                        })
                }
                // When assesment data is received
                if (assesment) {
                        const assesmentScore = await InterviewDay.updateMany({ 'user_id': user_id }, {
                                $set: {
                                        assesment: assesment
                                }
                        })

                        const { flexibility, comunication, lidership, achievementOrientation } = assesment
                        // REFACTORIZAR
                        resultAssesment = (flexibility.question1.score + flexibility.question2.score + comunication.question1.score + comunication.question2.score + lidership.question1.score + lidership.question2.score + achievementOrientation.question1.score + achievementOrientation.question2.score) / 8
                        const score = await InterviewDay.updateMany({ 'user_id': user_id }, {
                                $set: {
                                        assesmentScore: resultAssesment
                                }
                        })
                }
                const interviewDayScore = (resultInterview + resultAssesment) / 2
                //console.log(interviewDayScore)
                const score = await InterviewDay.updateMany({ 'user_id': user_id }, {
                        $set: {
                                interviewDayScore: interviewDayScore
                        }
                })
                res.send({ data: score })
        } catch {
                res.status(404).send({ error: "Candidate not found" })
        }
})

adminRouter.post('/create-room', async (req, res) => {
        const { citation_id } = req.body
        const citationData = await Citation.find({ _id: citation_id })
        const staff = await Administrator.find({ available: true })
        const interviewersList = staff.filter(person => person.rol.interviewer === true)
        const observersList = staff.filter(person => person.rol.observer === true)
        let room = [{
                candidate: user_id,//[10,11,12]
                interviewer: user_id, //[0,1,2,3]
                observador: user_id  // [0,1,2,3]
        }]
        for (let candidate of citationData[0].users) {
                const nStaff = 2
                console.log('hola')
                for (let i = 0; i < nStaff; i++) {
                        console.log(i)
                }
                room = [[candidate, interviewer, observador], ...room]
        }

        const rooms = new Rooms({
                citationData,
                interviewers: interviewersList,
                observers: observersList,
                room: room
        })
        res.json({
                data: {
                        rooms
                }
        })
})

adminRouter.post('/csv/', async (req, res) => {
        // Data from de candidate document
        const candidates = await User.find()
        // Data from the profile of the candidate
        const candidateProfiles = await Profile.find()
        // Strucuture for required data
        const csvObject = []
        
        for (let c of candidates) {
                const candidateProfileData = {
                        "firstName": candidates[0].firstName,
                        "middleName": candidates[0].middleName,
                        "lastName": candidates[0].lastName,
                        "secondSurname": candidates[0].Surname,
                        'fullName': `${candidates[0].firstName} ${candidates[0].lastName}`,
                        'documentType': candidateProfiles[0].documentType,
                        'documentNumber': candidateProfiles[0].documentNumber,
                        "email": candidates[0].email,
                        'contactNumber': candidates[0].contactNumber,
                        'nacionality': candidateProfiles[0].nacionality,
                        "residenceCountry": candidateProfiles[0].residenceCountry,
                        'residencyDepartment': candidateProfiles[0].residencyDepartment,
                        'municipalityOfResidency': candidates[0].municipalityOfResidency,
                        'socioeconomicStratus': candidateProfiles[0].socioeconomicStratus,
                        'actualAge': candidateProfiles[0].actualAge,
                        'gender': candidateProfiles[0].gender,
                        'status': 'true',
                }
                csvObject.push(candidateProfileData)
        }
        const csvFromArrayOfObjects = convertArrayToCSV(csvObject);
        res.json({ data: csvFromArrayOfObjects})
})
module.exports = adminRouter