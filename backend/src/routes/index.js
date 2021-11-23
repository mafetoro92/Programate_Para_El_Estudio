const { Router } = require('express')

const candidateRouter = require('../controllers/candidate')
const adminRouter = require('../controllers/admin')
const staffRouter = require('../controllers/staff')
const router = Router()


router.use('/api/candidate', candidateRouter)
router.use('/api/admin', adminRouter)
router.use('/api/staff', staffRouter)

module.exports = router