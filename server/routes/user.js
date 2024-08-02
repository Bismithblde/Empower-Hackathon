const express = require('express');
const { signupUser, loginUser, checkAdmin } = require('../controllers/userController.js');

const router = express.Router();

// Signup
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);
router.post('/check-admin', checkAdmin)
module.exports = router;