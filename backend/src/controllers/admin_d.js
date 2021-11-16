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
                migrants: 0
        }
        // Ciclo para extraer la info de cada usuario registrado en la convocatoria
        for (let candidateId of convocatoryData[0].usersRegisted) {
                // Perfil del candidato
                const candidate = await Profile.find({ user_id: candidateId })
                // Total genero: 0-Mujer, 1-Hombre, 2-Otro
                // Busca si la propiedad existe y aumenta 1, sino lo agrega con el valor 1
                if (candidate[0].gender === 0) {
                        if (totalUsers.woman) {
                                totalUsers.woman += 1
                        } else {
                                totalUsers.woman = 1
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
        }
        res.json({
                data: totalUsers
        })
})
// CREATES NEW CONVOCATORY
adminRouter.post('/new-conv', async (req, res, next) => {
        const { name, initialDate, finalDate, program, maxQuotas, initialBootcampDate, finalBootcampDate } = req.body;
        const newConvocatory = new Convocatory({ name, initialDate, finalDate, program, maxQuotas, initialBootcampDate, finalBootcampDate });
        await newConvocatory.save();
        res.send({ data: newConvocatory });
})

// UPDATE CONVOCATORY
adminRouter.put('/update-conv/:id', async (req, res, next) => {
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
adminRouter.get('/candidate-profile/:id', async (req, res, next) => {
        const candidate = await User.find({ user_id: req.params.id })
        const candidateProfile = await Profile.find({ user_id: req.params.id })
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

// GET FULL PROFILE OF CANDIDATES

// CREATE RESULTS
adminRouter.post('/new-result', async (req, res, next) => {
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
                console.log(req.body)
                if (candidate) {
                        const candidate = await User.update({ user_id: user_id }, {
                                $set: req.body.candidate
                        })
                }
                if (profile) {
                        const candidateProfile = await Profile.update({ user_id: user_id }, {
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
adminRouter.get('/interview/:id', async (req, res, next) => {
        console.log(req.params.id)
        const candidateInterview = await InterviewDay.find({ 'user_id': req.params.id })
        const { interview } = candidateInterview[0]
        res.send({
                data: interview
        })
})

// GET ASSESMENT QUESTIONS
adminRouter.get('/assesment/:id', async (req, res, next) => {
        console.log(req.params.id)
        const candidateAssesment = await InterviewDay.find({ 'user_id': req.params.id })
        const { assesment } = candidateAssesment[0]
        res.send({
                data: assesment
        })
})

// UPDATE INTERVIEW / ASSESMENT SCORES
adminRouter.put('/update-interview', async (req, res) => {
        try {
                const { user_id, interview, assesment } = req.body
                let resultInterview
                let resultAssesment
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
                console.log(interviewDayScore)
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
        let room = []
        console.log(citationData[0].users)
        for (let candidate of citationData[0].users) {
                const nStaff = 2
                console.log('hola')
                for (let i = 0; i < nStaff; i++) {
                        console.log(i)
                }
                room = [[candidate,], ...room]

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

module.exports = adminRouter