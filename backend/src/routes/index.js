const { Router } = require('express')

const candidateRouter = require('../controllers/Candidate')

const router = Router()

router.use('/api/candidate', candidateRouter)

module.exports = router
