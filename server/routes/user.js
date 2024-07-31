const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController.js');

const router = express.Router();

// Signup
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);

module.exports = router;