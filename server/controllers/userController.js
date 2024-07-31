const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

// Function to create JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '10y' });
};

// Controller function for user login
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check user credentials
        const user = await User.login(username, password);
        const token = createToken(user._id);

        // Send response with token
        res.status(200).json({ username, token });
    } catch (error) {
        // Send error response
        res.status(400).json({ error: error.message });
    }
};

// Controller function for user signup
const signupUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Create new user
        const user = await User.signup(username, password);
        const token = createToken(user._id);

        // Send response with token
        res.status(200).json({ username, token });
    } catch (error) {
        // Send error response
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
