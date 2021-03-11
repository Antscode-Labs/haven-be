const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../model/Users')
// const User = require('../model/User')


exports.login = async (req, res, next) => {
    //Validation Feils
    const { error } = loginValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    //User Check
    const userCheck = await Users.findOne({ email: req.body.email })
    if (!userCheck) {
        return res.status(400).send({ error: 'Seems like you dont have account' })
    }

    //PasswordComaprison
    const validPassword = await bycrpt.compare(req.body.password, userCheck.password)
    if (!validPassword) {
        return res.status(400).send({ error: 'Incorrect Password' })
    }


    //creating a token
    const token = jwt.sign({ _id: userCheck._id }, process.env.TOKEN_SECRET)
    res.header('auth-Token', token).send({ success: 'true', token: token, userId: userCheck._id, message: 'Member Login Sucessfull' })
}


exports.registerUser = async (req, res) => {
    //Validation
    //console.log('here', req)
   // const { error } = customerRegistrationValidation(req.body)
    //console.log('error', error)
    //console.log('here customer', customer)
    // if (error) {
    //     return res.status(400).json({ status: 400, message: error.details[0].message })
    // }

    //check user exist
    const emailCheck = await Users.findOne({ email: req.body.email })

    console.log('emailCheck', emailCheck)

    if (emailCheck) {
        return res.status(400).send({ status: 400, message: 'Email Already Exixts' })
    }

    //Hash the password
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(req.body.password, salt)

    const user = new Users({
        full_name: req.body.full_name,
        age: req.body.age,
        email: req.body.email,
        password: hashedPassword,
        mobile: req.body.mobile,
    });

    console.log('here', user)

    try {
        const registerdUser = await user.save();

        res.status(200).send({ success: 'true', data : registerdUser, message: 'User Registration Sucessfull' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}
