const router = require('express').Router();

//Controllers
const authController = require('../controller/auth')
const userController = require('../controller/user')
const isAuth = require('../middleware/isAuth')

router.post('/login' , authController.login)
router.post('/isFirstLogin' , authController.isFirstLogin)
router.post('/register', authController.registerUser)


router.post('/addGoal', userController.addGoal)
router.get('/getGoals/:id', userController.getGoals)
router.post('/addMedication', userController.addMedication)
router.get('/getMedication/:id', userController.getMedication)
router.post('/addEntry', userController.addJournalEntry)
router.get('/getEntries/:id', userController.getEntries)
router.post('/addPost', userController.addPost)
router.get('/getPosts', userController.getPosts)
router.post('/saveMood', userController.saveMood)
router.get('/getMoodHistory/:id', userController.getMoodHistory)
router.post('/saveAnswers', userController.saveAnswers)
router.get('/getAnswersHistory/:id', userController.getAnswersHistory)

router.get('/post' ,(req, res)=>{
    res.json({
        posts:{
            title : 'first post'
        }
    })
})

module.exports = router