const Profile = require('../db/models/Profile');
const User = require('../db/models/User');
const Result = require('../db/models/Result');
const multer = require('multer');
const mimeTypes = require('mime-types')
const request = require('request');
const nodemailer = require('nodemailer');
const {
        google
} = require('googleapis')
const {
        OAuth2
} = google.auth

const candidateRouter = require('express').Router()

const oAuth2Client = new OAuth2(
        '169447507213-pp77cjt1i0miu0fsfea1dson2vuvnvn7.apps.googleusercontent.com',
        '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'
)

oAuth2Client.setCredentials({
        refresh_token: '1//04ZNl89icy8DvCgYIARAAGAQSNwF-L9IrNd0_kBCZJnJEGfmgq7YzNwTS4nHx8eIOzBAQTGXMb5ZzTWznLUOWc0pz0uWC0BgiIhU',
})




// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
                user: 'programate.co@gmail.com', // generated ethereal user
                pass: 'plltidxfuexzvfdr', // generated ethereal password
        },
});

// UPLOAD FILE PDF
const storage = multer.diskStorage({
        destination: 'uploads/',
        filename: function (req, file, cb) {
                cb("", Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype));
        }
})
const upload = multer({
        storage: storage
})


// GET CALIFACATION
candidateRouter.get('/calification', async (req, res) => {
        const calification = await Result.find()
        res.send(calification)
})

// CREATES A NEW USER
candidateRouter.post('/new', async (req, res, next) => {
        const {
                firstName,
                middleName,
                lastName,
                secondSurname,
                email,
                contactNumber,
                rol
        } = req.body;
        const newUser = new User({
                firstName,
                middleName,
                lastName,
                secondSurname,
                email,
                contactNumber,
                rol
        });
        await newUser.save();
        res.send(`${newUser.firstName} saved`);
})

// CREATE THE PROFILE OF A USER
candidateRouter.post('/profile', upload.single('pdf'), async (req, res, next) => {
        const {
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
                heardFromUs: {
                        radio,
                        instagram,
                        facebook,
                        web
                },
                status
        } = req.body;
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
                heardFromUs: {
                        radio,
                        instagram,
                        facebook,
                        web
                },
                status
        });
        await newProfile.save();
        res.send(`${newProfile.user_id} profile saved`)
})

// GET ALL CANDIDATES
candidateRouter.get('/candidate', async (req, res) => {
        const candidates = await User.find()
        res.send(candidates);
})
//Get all Profile
candidateRouter.get('/profile', async (req, res) => {
        const profile = await Profile.find()
        const candidates = await User.find()
        const profiles = []

        let idx = 0
        for (let candidate of candidates) {
                let candidateData = await Profile.find({
                        user_id: candidate._id.toString()
                        })
                        if (candidateData[0] !== undefined){
                        candidateData = candidateData.map(candidate => candidate ? ({
                                'age': candidate.actualAge, 
                                'nacionality': candidate.nacionality, 
                                'municipalityOfResidency': candidate.municipalityOfResidency, 
                                'status': candidate.status.pass,
                                'documentType':  candidate.documentType,
                                'documentNumber':  candidate.documentNumber,
                                'gender': candidate.gender,
                                'residencyDepartment': candidate.residencyDepartment,
                                'socioeconomicStratus': candidate.socioeconomicStratus
                        })
                                : null)                      
                      
                        const candidateObj = {
                                'ID': idx,
                                'TipoDocumento': candidateData[0].documentType,
                                'NumeroDocumento': candidateData[0].documentNumber,
                                'Nombre': `${candidate.firstName} ${candidate.lastName}`,
                                'Email': candidate.email,
                                'Telefono': candidate.contactNumber,
                                'Edad': candidateData[0].age,
                                'Nacionalidad': candidateData[0].nacionality,
                                'Departamento': candidateData[0].residencyDepartment,
                                'Municipio': candidateData[0].municipalityOfResidency,
                                'Estrato': candidateData[0].socioeconomicStratus,
                                'Genero': candidateData[0].gender,
                                'Status': candidateData[0].status
                        }
                        console.log(candidateObj)
                        profiles.push(candidateObj)
                        idx++
                }
                
        }

        res.json({
                data: profiles
        });
})
candidateRouter.get('/profile/:id', async (req, res) => {
        const profile = await Profile.find({
                user_id: req.params.id
        })

        res.send(profile);
})

// GET PROFILE OF CANDIDATES
candidateRouter.get('/candidate-profile/:id', async (req, res) => {
        // Data from de candidate document
        const candidate = await User.find({
                user_id: req.params.id
        })
        // Data from the profile of the candidate
        const candidateProfile = await Profile.find({
                user_id: req.params.id
        })
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
                const {
                        user_id,
                        htmlScore,
                        cssScore,
                        javascriptScore,
                        pythonScore,
                        soloLearnScore,
                        personalProfileScore,
                        motivationScore,
                        finalScore,
                        pass
                } = req.body;
                // Viariables destructuring from user names

                const candidate = await User.findById(user_id)
                const {
                        firstName,
                        middleName,
                        lastName,
                        secondSurname
                } = candidate
                // Creating full name
                const fullName = `${firstName} ${middleName} ${lastName} ${secondSurname}`

                // Creating new Result document
                const newResult = new Result({
                        user_id,
                        fullName,
                        htmlScore,
                        cssScore,
                        javascriptScore,
                        pythonScore,
                        soloLearnScore,
                        personalProfileScore,
                        motivationScore,
                        finalScore,
                        pass
                });
                console.log(newResult)
                // Saving new document to Reults 
                await newResult.save();
                res.send({
                        data: newResult
                });
        } catch {
                res.status(404).send({
                        error: "Candidate not found"
                })
        }
})

// PUT OF CANDIDATE PASSES
// Recibe el user_id, y los objetos de la parte que se desee actualizar
// candidate actualiza los datos basicos del registro
// profile actualiza los datos del formulario
candidateRouter.put('/update-candidate', async (req, res) => {
        try {
                const {
                        user_id,
                        candidate,
                        profile
                } = req.body
                if (candidate) {
                        const candidate = await User.updateMany({
                                user_id: user_id
                        }, {
                                $set: req.body.candidate
                        })
                }
                if (profile) {
                        const candidateProfile = await Profile.updateMany({
                                user_id: user_id
                        }, {
                                $set: req.body.profile
                        })
                }
                res.send({
                        data: candidate
                })
        } catch {
                res.status(404).send({
                        error: "Candidate not found"
                })
        }

})



// SAVE AND UPDATE SOLOLEARN DATA
candidateRouter.get('/sololearn/:id', async (req, res) => {
        var id = req.params.id
        const perfiles = await Profile.find({
                "user_id": id
        })
        const params = JSON.stringify(perfiles)
        const json = JSON.parse(params)
        for (x of json) {
                var usersololearn = (x.soloLearnProfile);
        }
        if (usersololearn === undefined) {
                console.log("This user does not have a sololearn profile")
        } else {
                const calificationUpdate = await Result.find({
                        "user_id": id
                })
                const params2 = JSON.stringify(calificationUpdate)
                const json2 = JSON.parse(params2)
                for (y of json2) {
                        var users_id = (y.user_id).toString();
                }
                request(`https://api.sololearn.repl.co/profile/${usersololearn}`, async (err, response, body) => {
                        if (!err) {
                                const user = JSON.parse(body);
                                var name = user.userDetails.name
                                var html = 0;
                                var css = 0;
                                var javascript = 0;
                                var python = 0;
                                for (let i = 0; i < user.coursesProgress.length; i++) {
                                        if (user.coursesProgress[i].courseId === 1014) {
                                                html = user.coursesProgress[i].progress;
                                        } else if (user.coursesProgress[i].courseId === 1024) {
                                                javascript = user.coursesProgress[i].progress;
                                        } else if (user.coursesProgress[i].courseId === 1023) {
                                                css = user.coursesProgress[i].progress;
                                        } else if (user.coursesProgress[i].courseId === 1073) {
                                                python = user.coursesProgress[i].progress;
                                        }
                                }
                                var p = (html + css + javascript + python) / 4;
                                const {
                                        user_id = id,
                                                userFullName = name,
                                                htmlScore = html,
                                                cssScore = css,
                                                javascriptScore = javascript,
                                                pythonScore = python,
                                                soloLearnScore = p.toFixed(2)
                                } = req.body
                                const usersolo = new Result({
                                        user_id,
                                        userFullName,
                                        htmlScore,
                                        cssScore,
                                        javascriptScore,
                                        pythonScore,
                                        soloLearnScore
                                });
                                if (users_id === undefined) {
                                        await usersolo.save();
                                } else {
                                        await Result.updateOne({
                                                "user_id": id
                                        }, {
                                                $set: {
                                                        htmlScore: html,
                                                        cssScore: css,
                                                        javascriptScore: javascript,
                                                        pythonScore: python,
                                                        soloLearnScore: p.toFixed(2)
                                                }
                                        })
                                        console.log("Updated successfully")
                                }

                        } else {
                                console.log("Error" + err.message);
                        }
                })
        }
        res.send("seving datas")
})

candidateRouter.get('/calendar', async (req, res) => {

        const calendar = google.calendar({
                version: 'v3',
                auth: oAuth2Client
        })

        const eventStartTime = new Date()
        eventStartTime.setDate(eventStartTime.getDay() + 15)

        console.log(eventStartTime)


        const eventEndTime = new Date()
        eventEndTime.setDate(eventEndTime.getDay() + 15)
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)


        const event = {
                summary: `Prueba sergio`,
                location: `Prueba`,
                description: `Prueba`,
                colorId: 1,
                start: {
                        dateTime: eventStartTime,
                        timeZone: 'America/Bogota',
                },
                end: {
                        dateTime: eventEndTime,
                        timeZone: 'America/Bogota',
                },
        }

        calendar.freebusy.query({
                        resource: {
                                timeMin: eventStartTime,
                                timeMax: eventEndTime,
                                timeZone: 'America/Bogota',
                                items: [{
                                        id: 'primary'
                                }],
                        },
                },
                (err, res) => {
                        // Check for errors in our query and log them if they exist.
                        if (err) return console.error('Free Busy Query Error: ', err)

                        // Create an array of all events on our calendar during that time.
                        const eventArr = res.data.calendars.primary.busy

                        // Check if event array is empty which means we are not busy
                        if (eventArr.length === 0)
                                // If we are not busy create a new calendar event.
                                return calendar.events.insert({
                                                calendarId: 'primary',
                                                resource: event
                                        },
                                        err => {
                                                // Check for errors and log them if they exist.
                                                if (err) {
                                                        return console.error('Error Creating Calender Event:', err)
                                                } else {
                                                        transporter.sendMail({
                                                                from: '"Fred Foo 👻" <programate.co@gmail.com>', // sender address
                                                                to: "verasergio700@gmail.com", // list of receivers
                                                                subject: "Hello ✔", // Subject line
                                                                text: "Hello world?", // plain text body
                                                                html: "<b>Hello world?</b>", // html body
                                                        });
                                                        return console.log('Calendar event successfully created.')
                                                }

                                        }
                                )

                        // If event array is not empty log that we are busy.
                        return console.log(`Sorry I'm busy...`)
                }
        )

        res.send("Calendar event successfully created")
})


module.exports = candidateRouter