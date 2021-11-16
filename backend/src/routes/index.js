const { Router } = require('express')

const candidateRouter = require('../controllers/Candidate')
const admin_dRouter = require('../controllers/admin_d')
const router = Router()

router.use('/api/candidate', candidateRouter)
router.use('/api/admin', admin_dRouter)

module.exports = router


///administrado
//candidato
//mentor
//vusualizador