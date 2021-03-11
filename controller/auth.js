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

    const token = jwt.sign({ _id: userCheck._id }, process.env.TOKEN_SECRET)
    res.header('auth-Token', token).send({ success: 'true', token: token, userId: userCheck._id, message: 'Login Successfull!' })
}


exports.registerUser = async (req, res) => {

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
    });

    try {
        const registerdUser = await user.save();

        res.status(200).send({ success: 'true', data : registerdUser, message: 'User Registration Sucessfull' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}
