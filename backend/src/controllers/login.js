const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../db/models/User')

loginRouter.post('/', async (req, res, next) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!passwordCorrect) {
    res.status(401).json({
      error: 'Invalid password or user'
    })
  }

  res.send({
    name: user.name,
    username: user.username
  })
})

module.exports = loginRouter
