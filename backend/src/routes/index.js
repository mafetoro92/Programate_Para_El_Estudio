const { Router } = require('express')

const candidateRouter = require('../controllers/candidate')
<<<<<<< HEAD
const admin_y = require('../controllers/admin')
const admin_dRouter = require('../controllers/admin_d')
const router = Router()

router.use('/api/candidate', candidateRouter);
router.use('/api/admin', admin_y, admin_dRouter);


module.exports = router

=======
const adminRouter = require('../controllers/admin')
const staffRouter = require('../controllers/staff')
const router = Router()

router.use('/api/candidate', candidateRouter)
router.use('/api/admin', adminRouter)
router.use('/api/staff', staffRouter)
>>>>>>> 9dd96099426b41082e69c0c6c882e2493890fb94

module.exports = router