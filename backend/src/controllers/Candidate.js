const Profile = require('../db/models/Profile');
const User = require('../db/models/User');

const candidateRouter = require('express').Router()

candidateRouter.get('/', async (req, res, next) => {
        res.send("the router is fine")
})

// CREATES A NEW USER
candidateRouter.post('/new', async (req, res, next) => {
        const { firstName, middleName, lastName, secondSurname, email, contactNumber, rol } = req.body;
        const newUser = new User({ firstName, middleName, lastName, secondSurname, email, contactNumber, rol });
        await newUser.save();
        res.send(`${newUser.firstName} saved`);
})

// CREATE THE PROFILE OF A USER
candidateRouter.post('/profile', async (req, res, next) => {
        const { user_id,
                documentType,
                documentNumber,
                documentPdf,
                secondContactNumber,
                nacionality,
                residencyDepartment,
                municipalityOfResidency,
                locationInBogota,
                socioeconomicStratus,
                migrant,
                livesInColombia,
                address,
                dateOfBirth,
                birthdayOnFormation,
                maritalStatus,
                academicLevel,
                degreeTitle,
                currentOccupation,
                unemployedTime,
                formaltOccupation,
                victimArmedConflict,
                pcAccess,
                programataPrevoiousTimes,
                motivation,
                dreams,
                soloLearnProfile,
                status } = req.body;
        const newProfile = new Profile({
                user_id,
                documentType,
                documentNumber,
                documentPdf,
                secondContactNumber,
                nacionality,
                residencyDepartment,
                municipalityOfResidency,
                locationInBogota,
                socioeconomicStratus,
                migrant,
                livesInColombia,
                address,
                dateOfBirth,
                birthdayOnFormation,
                maritalStatus,
                academicLevel,
                degreeTitle,
                currentOccupation,
                unemployedTime,
                formaltOccupation,
                victimArmedConflict,
                pcAccess,
                programataPrevoiousTimes,
                motivation,
                dreams,
                soloLearnProfile,
                status
        });
        await newProfile.save();
        res.send(`${newProfile.user_id} profile saved`)
})

candidateRouter.get('/candidate', async (req, res) => {
        const candidates = await User.find()
        res.send(candidates);
})
candidateRouter.get('/profile', async (req, res) => {
        const candidates = await Profile.find()
        res.send(candidates);
})

// GET PROFILE OF CANDIDATES
candidateRouter.get('/candidate-profile/:id', async (req, res) => {
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
candidateRouter.post('/new-result', async (req, res) => {
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

// PUT OF CANDIDATE PASSES
// Recibe el user_id, y los objetos de la parte que se desee actualizar
// candidate actualiza los datos basicos del registro
// profile actualiza los datos del formulario
candidateRouter.put('/update-candidate', async (req, res) => {
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

module.exports = candidateRouter