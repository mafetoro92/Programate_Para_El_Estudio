const Result = require('../db/models/Result');
const Convocatory = require('../db/models/Convocatory');
const Citation = require('../db/models/Citation');

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
})
admin_y.get('/rating-motivation', async (req, res)=>{
    const results = await Result.find();
    console.log(results[1].motivationScore);

    res.json({
        results
    })
})

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
})


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
})

admin_y.get('/parameterization', async (req, res)=>{
    const results = await Convocatory.find();
    res.send(results)
})

admin_y.get('/citation', async (req, res)=>{
    const results = await Citation.find();
    res.send(results)
})

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
})



module.exports = admin_y