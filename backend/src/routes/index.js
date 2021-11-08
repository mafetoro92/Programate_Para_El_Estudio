const { Router } = require('express')

const candidateRouter = require('../controllers/candidate')

const router = Router()

router.use('/api/candidate', candidateRouter)

module.exports = router
