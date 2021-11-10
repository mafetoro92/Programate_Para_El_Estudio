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

module.exports = candidateRouter