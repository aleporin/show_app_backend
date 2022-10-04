const router = require('express').Router()
const controllers = require('../controllers/UserController')
const middleware = require('../middleware')

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.CheckSession
)

module.exports = router
