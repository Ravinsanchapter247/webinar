const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//create token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


//login function
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    console.log(email, 'email')

    const user = await User.findOne({ email })
    console.log(user, 'user')

    const match = await bcrypt.compare(password, user.password)

    if (user && match) {
        res.status(200).json({ _id: user.id, name: user.name, email: user.email, token: createToken(user._id) })
    } else {
        res.status(400).json({ message: 'Invalid credentials' })
    }


})


//register user function

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password,mobileNumber,passwordConfirmation } = req.body
    console.log(req.body)

    if (!name || !email || !password || !passwordConfirmation || !mobileNumber) {

        res.status(400).json({ message: 'Please enter all fields' })

    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400).json({ message: 'email already email' })
    }


    
         console.log("Password :",password)
        const salt = await bcrypt.genSalt(10)
    console.log(salt.toString())
    const hash = await bcrypt.hash(password,salt)
      console.log('salt :',salt.toString())

    const user = await User.create({ email, password: hash, name,passwordConfirmation,mobileNumber })

    if (user) {
        res.status(201).json({ name: user.name, email: user.email,passwordConfirmation:user.passwordConfirmation,mobileNumber:user.mobileNumber, _id: user.id, token: createToken(user._id) })
    } else {
        res.status(400).json({ message: 'Invalid user data' })
    }



    
   

})

const getMe = asyncHandler(async (req, res) => {


    res.status(200).json(req.user)
})


module.exports = {
    loginUser,
    registerUser,
    getMe
} 