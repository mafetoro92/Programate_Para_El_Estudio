const { Router } = require('express')
const usersRouter = require('../controllers/users')
const loginRouter = require('../controllers/login')

const router = Router()

router.use('/api/users', usersRouter)

router.use('/api/login', loginRouter)

module.exports = router
