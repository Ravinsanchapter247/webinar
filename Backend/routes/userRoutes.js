const express =require('express')

const router =express.Router()

router.post('/login',loginUser)

router.post('/register',registerUser)