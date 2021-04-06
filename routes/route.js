const router = require('express').Router();

//Controllers
const authController = require('../controller/auth')
const userController = require('../controller/user')
const isAuth = require('../middleware/isAuth')

router.post('/login' , authController.login)
router.post('/isFirstLogin' , authController.isFirstLogin)
router.post('/register', authController.registerUser)

router.post('/addEntry', userController.addJournalEntry)
router.get('/getEntries/:id', userController.getEntries)
router.post('/addPost', userController.addPost)
router.get('/getPosts', userController.getPosts)

router.get('/post' ,(req, res)=>{
    res.json({
        posts:{
            title : 'first post'
        }
    })
})

module.exports = router