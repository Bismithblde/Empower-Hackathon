const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const usernameValidation = /^[a-zA-Z0-9_]+$/;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return usernameValidation.test(v);
            },
            message: 'Username can only contain letters, numbers, and underscores.'
        }
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.statics.signup = async function (username, password) {
    if (!username || !password) {
        throw new Error("All fields must be filled out");
    }

    if (!usernameValidation.test(username)) {
        throw new Error("Invalid username format. Only letters, numbers, and underscores are allowed.");
    }

    const exists = await this.findOne({ username });
    if (exists) {
        throw new Error("Username already in use.");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ username, password: hash });
    return user;
}

userSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw new Error("All fields must be filled out");
    }

    if (!usernameValidation.test(username)) {
        throw new Error("Invalid username format. Only letters, numbers, and underscores are allowed.");
    }

    const user = await this.findOne({ username });
    if (!user) {
        throw new Error("Incorrect username or password");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error("Incorrect username or password");
    }

    return user;
}

const User = mongoose.model('User', userSchema);
module.exports = User;
