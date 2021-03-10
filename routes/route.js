const router = require('express').Router();

//Controllers
const authController = require('../controller/auth')
const isAuth = require('../middleware/isAuth')

router.post('/login' , authController.login)
router.post('/registerCustomer', authController.registerCustomer)

module.exports = router