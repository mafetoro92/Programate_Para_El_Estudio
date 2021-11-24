const Convocatory = require('../db/models/Convocatory');
const Profile = require('../db/models/Profile');
const User = require('../db/models/User');
const Rooms = require('../db/models/Rooms');
const adminRouter = require('express').Router();
const request = require('request');
const Administrator = require('../db/models/Administrators');
const Citation = require('../db/models/Citation');
const Result = require('../db/models/Result');
const ObjectId = require('mongodb').ObjectID;

// GET STATISTICS
adminRouter.get("/statistics", async (req, res) => {
        // Busca la convocatoria que se encuentra activa
        const convocatoryData = await Convocatory.find({ status: true });
        // Busca las citaciones para obtener datos de las fechas e inscritos
        const citationData = await Citation.find();
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
                heardFromUs: {},
        };
        for (let citation of citationData) {
                let date = citation.date.toString();
                date = date.split(" ").slice(1, 4).join("-");
                if (totalUsers.interviewDays[date]) {
                        totalUsers.interviewDays[date] += citation.users.length;
                } else {
                        totalUsers.interviewDays[date] = citation.users.length;
                }
        }
        // Ciclo para extraer la info de cada usuario registrado en la convocatoria
        for (let candidateId of convocatoryData[0].usersRegisted) {
                // Perfil del candidato
                const candidate = await Profile.find({ user_id: candidateId });
                // Total genero: 0-Mujer, 1-Hombre, 2-Otro
                // Busca si la propiedad existe y aumenta 1, sino lo agrega con el valor 1
                //console.log(candidate[0].gender)
                if (candidate[0].gender === 0) {
                        if (totalUsers.women) {
                                totalUsers.women += 1;
                        } else {
                                totalUsers.women = 1;
                        }
                }
                if (candidate[0].gender === 1) {
                        if (totalUsers.man) {
                                totalUsers.man += 1;
                        } else {
                                totalUsers.man = 1;
                        }
                }
                if (candidate[0].gender === 2) {
                        if (totalUsers.other) {
                                totalUsers.other += 1;
                        } else {
                                totalUsers.other = 1;
                        }
                }
                // Total registrados en la convocatoria
                if (candidate[0].status.registered === true) {
                        if (totalUsers.totalregistered) {
                                totalUsers.totalregistered += 1;
                        } else {
                                totalUsers.totalregistered = 1;
                        }
                }
                // Total citados
                if (candidate[0].status.withCitation === true) {
                        if (totalUsers.totalwithCitation) {
                                totalUsers.totalwithCitation += 1;
                        } else {
                                totalUsers.totalwithCitation = 1;
                        }
                }
                // Total entrevistados
                if (candidate[0].status.interviewed === true) {
                        if (totalUsers.interviewed) {
                                totalUsers.interviewed += 1;
                        } else {
                                totalUsers.interviewed = 1;
                        }
                }
                // Total que pasaron el proceso
                if (candidate[0].status.pass === true) {
                        if (totalUsers.totalPass) {
                                totalUsers.totalPass += 1;
                        } else {
                                totalUsers.totalPass = 1;
                        }
                }
                // Total de departamentos de residencia
                // Si el departamento no existe lo agrega, si existe le suma 1
                // En el objeto residencyDepartment en totalUsers
                const deparment = candidate[0].residencyDepartment;
                if (deparment) {
                        if (totalUsers.residencyDepartment[deparment]) {
                                totalUsers.residencyDepartment[deparment] += 1;
                        } else {
                                totalUsers.residencyDepartment[deparment] = 1;
                        }
                }
                if (candidate[0].status.migrants === true) {
                        if (totalUsers.totalmigrants) {
                                totalUsers.totalmigrants += 1;
                        } else {
                                totalUsers.totalmigrants = 1;
                        }
                }
                if (candidate[0].heardFromUs) {
                        //console.log(candidate[0].heardFromUs)
                        for (const [key, value] of Object.entries(
                                candidate[0].heardFromUs
                        )) {
                                if (value) {
                                        if (totalUsers.heardFromUs[key]) {
                                                totalUsers.heardFromUs[key] += 1;
                                        } else {
                                                totalUsers.heardFromUs[key] = 1;
                                        }
                                }
                        }
                }
        }
        // Check how many to remains to goal
        if (totalUsers.totalPass < convocatoryData[0].maxQuotas) {
                const goal = convocatoryData[0].maxQuotas - totalUsers.totalPass;
                totalUsers.remainingToGoal = goal;
        } else {
                totalUsers.remainingToGoal = 0;
        }
        res.json({
                data: totalUsers,
        });
});

// CREATES NEW CONVOCATORY
adminRouter.post('/new-conv', async (req, res, next) => {
        // DATA REQUIRED FROM REQUEST
        const {
                name,
                initialDate,
                finalDate,
                program,
                maxQuotas,
                initialBootcampDate,
                finalBootcampDate,
                usersRegisted

        } = req.body;
        // New Convocatory document
        const newConvocatory = new Convocatory({
                name,
                initialDate,
                finalDate,
                program,
                maxQuotas,
                initialBootcampDate,
                finalBootcampDate,
                usersRegisted,

        });
        await newConvocatory.save();
        res.send({ data: newConvocatory });
})


// UPDATE CONVOCATORY
adminRouter.put('/update-conv/:id', async (req, res) => {
        try {
                const convocatory = await Convocatory.findById(req.params.id)
                Object.assign(convocatory, req.body)
                convocatory.save()
                res.send({ data: convocatory })
        } catch {
                res.status(404).send({ error: "Convocatory not found" })
        }
})


// GET THE RESULTS OF CANDIDATE
adminRouter.get("/get-result/:id", async (req, res) => {
        try {
                // const { user_id } = req.params.id;
                // console.log(user_id)
                const candidateProfile = await Profile.find({ user_id: req.params.id })
                let { soloLearnProfile } = candidateProfile[0]
                // Fetching Solo learn data
                try {
                        request(
                                `https://api.sololearn.repl.co/profile/${soloLearnProfile}`,
                                (err, response, body) => {
                                        if (!err) {
                                                const candidate = JSON.parse(body);
                                                scores = candidate.coursesProgress.map((course) => [
                                                        course.courseName,
                                                        course.progress,
                                                ]);
                                                const objScores = Object.fromEntries(scores);
                                                res.json({ data: objScores });
                                        }
                                }
                        );
                } catch {
                        res.json({ error: "Error fetching data" });
                }
        } catch {
                res.status(404).send({ error: "Candidate not found" });
        }
});

// GET THE LIST OF CANDIDATES IN WAIT LIST

adminRouter.get('/results', async (req, res, next) => {
        const results = await Result.find()
        res.send({ data: results })
})


// GET THE LIST OF CANDIDATES IN WAIT LIST

adminRouter.get('/waiting-list', async (req, res, next) => {
        let waitList = await Profile.find()
        waitList = waitList.filter(candidate => candidate.status.waitList === true)
        let waitListResults = []
        for (let candidate of waitList) {
                let candidateData = await Result.find({
                        user_id: candidate.user_id
                })
                const candidateName = await User.find({_id: ObjectId(candidate.user_id)})
                if (candidateData[0] !== undefined) {
                        candidateData = candidateData.map(candidate => candidate ? ({
                                        'sololearn': candidate.soloLearnScore,
                                        'personal': candidate.personalProfileScore,
                                        'motivation': candidate.motivationScore,
                                        'final': candidate.finalScore,
                                        'status': candidate.status

                                }) :
                                null)
                                console.log(candidateData)
                        const candidateObj = {
                                'ID': candidate.user_id,
                                'Nombre': `${candidateName[0].firstName} ${candidateName[0].lastName}`,
                                'sololearn': candidateData[0].sololearn,
                                'personal': candidateData[0].personal,
                                'motivation': candidateData[0].motivation,
                                'final': candidateData[0].final,
                                'Status': candidateData[0].status
                        }
                        waitListResults.push(candidateObj)
                }
        }
        res.json({
                data: waitListResults
        });
})


// Download CSV files
adminRouter.get("/csv/", async (req, res) => {
        // Data from de candidate document
        const candidates = await User.find();
        // Data from the profile of the candidate
        const candidateProfiles = await Profile.find();
        // Strucuture for required data
        const csvObject = [];

        for (let c of candidates) {
                const candidateProfileData = {
                        firstName: candidates[0].firstName,
                        middleName: candidates[0].middleName,
                        lastName: candidates[0].lastName,
                        secondSurname: candidates[0].Surname,
                        fullName: `${candidates[0].firstName} ${candidates[0].lastName}`,
                        documentType: candidateProfiles[0].documentType,
                        documentNumber: candidateProfiles[0].documentNumber,
                        email: candidates[0].email,
                        contactNumber: candidates[0].contactNumber,
                        nacionality: candidateProfiles[0].nacionality,
                        residenceCountry: candidateProfiles[0].residenceCountry,
                        residencyDepartment: candidateProfiles[0].residencyDepartment,
                        municipalityOfResidency: candidates[0].municipalityOfResidency,
                        socioeconomicStratus: candidateProfiles[0].socioeconomicStratus,
                        actualAge: candidateProfiles[0].actualAge,
                        gender: candidateProfiles[0].gender,
                        status: "true",
                };
                csvObject.push(candidateProfileData);
        }
        const csvFromArrayOfObjects = convertArrayToCSV(csvObject);
        res.json({ data: csvFromArrayOfObjects });
});

// Updates the parameters for actual convocatory
adminRouter.put("/parameterization/:_id", async (req, res) => {
        try {
                const { _id } = req.params;
                const result = await Convocatory.updateMany(
                        { _id },
                        {
                                $set: {
                                        parameterization: {
                                                personalProfile:
                                                        req.body.parameterization.personalProfile,
                                                sololearn: req.body.parameterization.sololearn,
                                                motivationLetter:
                                                        req.body.parameterization.motivationLetter,
                                        },
                                        residenceCountry: req.body.residenceCountry,
                                        residencyDepartment: req.body.residencyDepartment,
                                        maxAge: req.body.maxAge,
                                        maxSocioeconomicStratus: req.body.maxSocioeconomicStratus,
                                },
                        }
                );
                res.send({ data: result });
        } catch {
                res.status(404).send({ error: "parameterization category not put" });
        }
});

// Get all citations
adminRouter.get('/citation', async (req, res) => {
        const citations = await Citation.find();
        const data = citations.map((citation, idx) => citation ? ({'id': idx, 'users': citation.users, 'date': citation.date}) : null)
        res.send(data)
});

adminRouter.get('/c', async (req, res) => {
        const results = await Convocatory.find({});
        res.send(results)
});


adminRouter.put('/update-test', async (req, res) => {
        try {
                const _id = req.body;
                const result = await Convocatory.updateMany(
                        { _id },
                        {
                                $set: {
                                        test: {
                                                nameTest: req.body.test.nameTest,
                                                linkTest: req.body.test.linkTest
                                        }
                                }
                        }
                );
                res.send(result)
        } catch {
                res.status(404).send({ error: "link citation category not put" })
        }
}
)
// Creates new citations
adminRouter.post("/citation", async (req, res) => {
        const { users, date, journy, quotasCompleted, maxQuotas } = req.body;
        const citation = new Citation({
                users,
                date,
                journy,
                quotasCompleted,
                maxQuotas,
        });
        await citation.save();
        res.send("citation saved")


});

// To upload the thecnical test for candidates
adminRouter.put("/upload-test", async (req, res) => {
        try {
                const _id = req.body;
                const result = await Convocatory.updateMany(
                        { _id },
                        {
                                $set: {
                                        test: {
                                                nameTest: req.body.test.nameTest,
                                                linkTest: req.body.test.linkTest,
                                        },
                                },
                        }
                );
                res.send(result);
        } catch {
                res.status(404).send({ error: "link citation category not put" });
        }
});

// Create assesments rooms for interview days
adminRouter.post("/create-room", async (req, res) => {
        const { citation_id } = req.body;
        const citationData = await Citation.find({ _id: citation_id });
        const staff = await Administrator.find({ available: true });
        const interviewersList = staff.filter(
                (person) => person.rol.interviewer === true
        );
        const observersList = staff.filter(
                (person) => person.rol.observer === true
        );
        let room = [];

        for (let candidate of citationData[0].users) {
                let interviewersRandom = Math.floor(
                        Math.random() * (interviewersList.length - 0) + 0
                );
                let interviewersFinals =
                        interviewersList[interviewersRandom]._id.toString();

                let observersRandom = Math.floor(
                        Math.random() * (observersList.length - 0) + 0
                );
                let observersFinals = observersList[observersRandom]._id.toString();
                room = [[candidate, interviewersFinals, observersFinals], ...room];
                console.log(room);
        }

        const rooms = new Rooms({
                citationData,
                interviewers: interviewersList,
                observers: observersList,
                room: room,
        });
        res.json({
                data: {
                        rooms,
                },
        });
});

// Create administrators and staff users
adminRouter.post("/admin", async (req, res) => {
        const {
                firstName,
                lastName,
                rol: { interviewer, observer, monitor },
                available,
        } = req.body;
        const admin = new Administrator({
                firstName,
                lastName,
                rol: {
                        interviewer,
                        observer,
                        monitor,
                },
                available,
        });
        await admin.save();
        res.send("profile saved");
});

// Get administrators and staff profiles
adminRouter.get("/admin", async (req, res) => {
        const results = await Administrator.find();
        res.send(results);
});

module.exports = adminRouter;
