const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../model/Users')


exports.login = async (req, res, next) => {

    const checedkUser = await Users.findOne({ email: req.body.email })
    if (!checedkUser) {
        return res.status(400).send({ error: 'Account not exists' })
    }

    const isvalidPassword = await bycrpt.compare(req.body.password, checedkUser.password)
    if (!isvalidPassword) {
        return res.status(400).send({ error: 'Invdalid Password' })
    }

    const userData = await Users.findOne({ email: req.body.email })
    const token = jwt.sign({ _id: checedkUser._id }, process.env.TOKEN_SECRET)
    res.header('auth-Token', token).send({ success: 'true', token: token, user: userData, userId: checedkUser._id, message: 'Login Successfull!' })
}

exports.isFirstLogin = async (req, res, next) => {

    const loggedUser = await Users.findOne({ email: req.body.email })

    loggedUser.isFirstLogin = false;

    try {
        const editedLoggedUser = await loggedUser.save();

        res.status(200).send({ success: 200, data: editedLoggedUser, message: 'User Edited Sucessfully' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }


}


exports.registerUser = async (req, res) => {

    console.log(req, 'req')

    const checkedEmail = await Users.findOne({ email: req.body.email })

    if (checkedEmail) {
        return res.status(400).send({ status: 400, message: 'Email Already Taken' })
    }

    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(req.body.password, salt)

    const user = new Users({
        full_name: req.body.full_name,
        age: req.body.age,
        email: req.body.email,
        password: hashedPassword,
        mobile: req.body.mobile,
        isFirstLogin : true,
    });

    try {
        const registerdUser = await user.save();

        res.status(200).send({ success: 'true', data : registerdUser, message: 'User Registration Sucessfull' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getUser = async (req, res) => {

    //let entry = {}
    //const userData = await Users.findOne({ _id: req.params.id })
    let user = {}
    user = await Users.findOne({ _id: req.params.id })
    console.log('userData', user)
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, user : user, message: 'Get User Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}
