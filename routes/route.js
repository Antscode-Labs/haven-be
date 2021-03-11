const router = require('express').Router();

//Controllers
const authController = require('../controller/auth')
const isAuth = require('../middleware/isAuth')

router.post('/login' , authController.login)
router.post('/register', authController.registerUser)


router.get('/post' ,(req, res)=>{
    res.json({
        posts:{
            title : 'first post'
        }
    })
})

module.exports = router