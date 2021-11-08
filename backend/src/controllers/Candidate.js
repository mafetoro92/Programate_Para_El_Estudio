const candidateRouter = require('express').Router()

candidateRouter.get('/', async (req, res, next) => {
        res.send("the router is fine")
})



module.exports = candidateRouter