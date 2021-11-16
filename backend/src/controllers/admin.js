const Result = require('../db/models/Result');
const Convocatory = require('../db/models/Convocatory');
const Citation = require('../db/models/Citation');
const Rooms = require('../db/models/Rooms');
const Administrator = require('../db/models/Administrators')

const admin_y = require('express').Router();

admin_y.put('/rating-motivation', async (req, res)=>{
    try{
        const {user_id} = req.body;
        const result = await Result.update(
            {user_id},
            { $set:
                {
                    motivationScore: req.body.motivationScore
                }
            }
            );
            res.send({data:result})
    }catch{
        
            res.status(404).send({error:"Rating Motivation not put"})
            console.log(Error)
    }
});

admin_y.get('/rating-motivation', async (req, res)=>{
    const results = await Result.find();
    res.json({
        results
    })
});

admin_y.post('/convocatory', async (req, res) => {
    const { 
    _id,
    name,
    initialDate,
    finallDate,
    program,
    maxQuotas,
    initialBootcampDate,
    finalBootcampDate,
    parameterization:{
    personalProfile,
    sololearn,
    motivationLetter},
    usersRegisted
    } = req.body;
    const convocatory = new Convocatory({
        _id,
        name,
        initialDate, 
        finallDate,
        program,
        maxQuotas,
        initialBootcampDate,
        finalBootcampDate,
        parameterization:{
        personalProfile,
        sololearn,
        motivationLetter},
        usersRegisted,
    });
    await convocatory.save();
    res.send( "profile saved")
});

admin_y.put('/parameterization/:_id', async (req, res)=>{
    try{
        const {_id} = req.params;
        const result = await Convocatory.updateMany(
            {_id},
            { $set:
                {
                    parameterization:{
                        personalProfile: req.body.parameterization.personalProfile,
                        sololearn: req.body.parameterization.sololearn,
                        motivationLetter: req.body.parameterization.motivationLetter
                    },
                    residenceCountry: req.body.residenceCountry,
                    residencyDepartment: req.body.residencyDepartment,
                    maxAge: req.body.maxAge,
                    maxSocioeconomicStratus: req.body.maxSocioeconomicStratus
                }
            }
            );
            res.send({data:result})
    }catch{
        res.status(404).send({error:"parameterization category not put"})
    }
});

admin_y.get('/parameterization/:id', async (req, res)=>{
    const convocatory = await Convocatory.find({_id:req.params.id});
    // let resultsmore = null;
    // for(let register of convocatory[0].usersRegisted){
    //     const results = await Result.find({user_id: register});
    //     console.log(results)
    //     resultsmore= results
    //     // userRegister= [{results}, ...userRegister]
    // }
    // console.log(resultsmore)
    // let parameter = {
    //     "personalProfile": convocatory[0].parameterization.personalProfile,
    //     "sololearn": convocatory[0].parameterization.sololearn,
    //     "motivationLetter": convocatory[0].parameterization.motivationLetter
    // }
    // let resul = {
    //     "soloLearnScore":results.soloLearnScore,
    //     "personalProfileScore":results.personalProfileScore,
    //     "motivationScore":results.motivationScore
    // }
    // console.log(convocatory[0].parameterization)
    res.send(convocatory)
});

admin_y.get('/citation', async (req, res)=>{
    const results = await Convocatory.find();
    res.send(results)
});

admin_y.post('/citation', async (req, res)=>{
    const {
        users,
        date,
        journy,
        quotasCompleted,
        maxQuotas,
        }=req.body
    const citation = new Citation({
        users,
        date,
        journy,
        quotasCompleted,
        maxQuotas,
    })
    await citation.save();
    res.send( "citation saved")
});

admin_y.put('/testconvocatory', async (req, res)=>{
    try{
        const _id = req.body;
        const result = await Convocatory.update(
            {_id},
            {$set:{
                test:{
                    nameTest: req.body.test.nameTest,
                    linkTest: req.body.test.linkTest
                } 
            }}
        );
        res.send(result)
    }catch{
        res.status(404).send({error:"link citation category not put"})
    }
});

admin_y.post('/create-room', async (req, res) => {
    const { citation_id } = req.body
    const citationData = await Citation.find({ _id: citation_id })
    const staff = await Administrator.find({ available: true })
    const interviewersList = staff.filter(person => person.rol.interviewer === true)
    const observersList = staff.filter(person => person.rol.observer === true)
    let room = [] 

    for (let candidate of citationData[0].users) {

        let interviewersRandom = Math.floor(Math.random()*(interviewersList.length-0)+0);
        let interviewersFinals = interviewersList[interviewersRandom]._id.toString();

        let observersRandom = Math.floor(Math.random()*(observersList.length-0)+0);
        let observersFinals = observersList[observersRandom]._id.toString();
            room = [[candidate, interviewersFinals, observersFinals], ...room]
            console.log(room)
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
});

admin_y.get('/create-room', async (req, res)=>{
    const results = await Rooms.find();
    res.send(results)
});

admin_y.post('/admin', async (req, res)=>{
    const{
        firstName,
        lastName,
        rol: {
          interviewer,
          observer,
          monitor
        },
        available,
    }= req.body
    const admin = new Administrator({
        firstName,
        lastName,
        rol: {
          interviewer,
          observer,
          monitor
        },
        available,
    });
    await admin.save();
    res.send( "profile saved")
});

admin_y.get('/admin', async (req, res)=>{
    const results = await Administrator.find();
    res.send(results)
});

module.exports = admin_y