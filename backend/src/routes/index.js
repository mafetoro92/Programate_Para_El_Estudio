const { Router } = require('express')

const candidateRouter = require('../controllers/candidate')
const admin_y = require('../controllers/admin')

const router = Router()

router.use('/api/candidate', candidateRouter);
router.use('/api/admin', admin_y);


module.exports = router


///administrado
//candidato
//mentor
//vusualizador