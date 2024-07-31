const express = require('express');

const { signupUser, loginUser } = require('../controllers/userController.js')

const router = express.Router();

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)


module.exports = router