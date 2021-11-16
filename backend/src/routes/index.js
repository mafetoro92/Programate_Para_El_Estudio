const { Router } = require('express')

const candidateRouter = require('../controllers/candidate')
const admin_y = require('../controllers/admin')
const admin_dRouter = require('../controllers/admin_d')
const router = Router()

router.use('/api/candidate', candidateRouter);
router.use('/api/admin', admin_y, admin_dRouter);


module.exports = router


///administrado
//candidato
//mentor
//vusualizador