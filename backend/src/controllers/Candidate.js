const Profile = require('../db/models/Profile');
const User = require('../db/models/User');
const Result = require('../db/models/Result');
const multer = require('multer');
const mimeTypes = require('mime-types')
const candidateRouter = require('express').Router()
const request = require('request');
const { ConnectionStates } = require('mongoose');
const nodemailer = require('nodemailer');
const { google } = require('googleapis')
const { OAuth2 } = google.auth


const oAuth2Client = new OAuth2(
        '169447507213-pp77cjt1i0miu0fsfea1dson2vuvnvn7.apps.googleusercontent.com',
        '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'
      )

oAuth2Client.setCredentials({
        refresh_token:'1//04ZNl89icy8DvCgYIARAAGAQSNwF-L9IrNd0_kBCZJnJEGfmgq7YzNwTS4nHx8eIOzBAQTGXMb5ZzTWznLUOWc0pz0uWC0BgiIhU',
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
        filename: function (req, file,cb) {
                cb("",Date.now() + file.originalname +"." + mimeTypes.extension(file.mimetype));
        }
})

const upload = multer({
        storage: storage
})

// SAVE AND UPDATE SOLOLEARN DATA
candidateRouter.get('/sololearm/:id', async (req, res) => {
        var id = req.params.id
        const perfiles = await Profile.find({"user_id":id})
        const params = JSON.stringify(perfiles)
        const json = JSON.parse(params)
        for (x of json) {
               var usersololearm = (x.soloLearnProfile);
        }
        if(usersololearm === undefined){
                console.log("This user does not have a sololearn profile")
        }else{
                const calificationUpdate = await Result.find({"user_id":id})
                const params2 = JSON.stringify(calificationUpdate)
                const json2 = JSON.parse(params2)
                for (y of json2) {
                        var users_id = (y.user_id).toString();
                }
                request(`https://api.sololearn.repl.co/profile/${usersololearm}`, async (err,response,body)=>{
                        if (!err){
                                const user = JSON.parse(body);
                                var name = user.userDetails.name
                                var html = 0;
                                var css = 0;
                                var javascript = 0;
                                var python = 0;
                                for (let i = 0; i < user.coursesProgress.length; i++) {
                                        if(user.coursesProgress[i].courseId === 1014){
                                                html = user.coursesProgress[i].progress;
                                        }else if(user.coursesProgress[i].courseId === 1024){
                                                javascript = user.coursesProgress[i].progress;
                                        }else if(user.coursesProgress[i].courseId === 1023){
                                                css = user.coursesProgress[i].progress;
                                        }else if(user.coursesProgress[i].courseId === 1073){
                                                python = user.coursesProgress[i].progress;
                                        }                           
                                }
                                var p = (html+css+javascript+python)/4;
                                const{  user_id = id,  
                                        userFullName = name, 
                                        htmlScore = html,
                                        cssScore = css,
                                        javascriptScore  = javascript,
                                        pythonScore = python,
                                        soloLearnScore = p.toFixed(2)
                                }= req.body     
                                const usersolo = new Result({
                                        user_id,  
                                        userFullName, 
                                        htmlScore,
                                        cssScore,
                                        javascriptScore,
                                        pythonScore,
                                        soloLearnScore
                                });
                                if(users_id === undefined) {
                                        await usersolo.save();
                                }else{
                                        await Result.updateOne({"user_id":id}, {
                                                $set:{
                                                    htmlScore: html,
                                                    cssScore: css,
                                                    javascriptScore: javascript,
                                                    pythonScore: python,
                                                    soloLearnScore: p.toFixed(2)
                                                }
                                        })
                                        console.log("Updated successfully")
                                }       

                        }else{
                                console.log("Error" + err.message);
                        }
                }) 
        }
        res.send("seving datas")
})

// GET CALIFACATION
candidateRouter.get('/calification', async (req, res) => {
       const calification = await Result.find()
       res.send(calification)
})

// CREATES A NEW USER
candidateRouter.post('/new', async (req, res, next) => {
        const { firstName, middleName, lastName, secondSurname, email, contactNumber, rol } = req.body;
        const newUser = new User({ firstName, middleName, lastName, secondSurname, email, contactNumber, rol });
        await newUser.save();
        res.send(`${newUser.firstName} saved`);
})

// CREATE THE PROFILE OF A USER
candidateRouter.post('/profile',upload.single('pdf'), async (req, res, next) => {
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


candidateRouter.get('/calendar', async (req, res) => {
 
        const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

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

        calendar.freebusy.query(
                {
                resource: {
                timeMin: eventStartTime,
                timeMax: eventEndTime,
                timeZone: 'America/Bogota',
                items: [{ id: 'primary' }],
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
                return calendar.events.insert(
                { calendarId: 'primary', resource: event },
                err => {
                        // Check for errors and log them if they exist.
                        if (err){
                                return console.error('Error Creating Calender Event:', err)
                        }else {
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
                return console.log(`Sorry I'm busy..`)
                }
        ) 

        res.send("Calendar event successfully created")
})


module.exports = candidateRouter