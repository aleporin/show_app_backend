const router = require('express').Router()
const controllers = require('../controllers/ShowController')
// const middleware = require('../middleware')

router.post('/create/:user_id', controllers.CreateShow)
