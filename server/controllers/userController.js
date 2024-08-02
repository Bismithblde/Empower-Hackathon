const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '10y' });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
            
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const signupUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.signup(username, password);
        const token = createToken(user._id);

        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const checkAdmin = async (req, res) => {
    const { username } = req.body;
    try {
        const isAdmin = await User.checkAdmin(username);
        res.status(200).json({isAdmin})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = { loginUser, signupUser, checkAdmin };
