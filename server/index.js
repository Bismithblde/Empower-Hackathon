require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const userRouter = require('./routes/user');
const blogcreatorRouter = require('./routes/blogcreator');
const achievementRouter = require('./routes/achievement');
app.use(cors());
app.use(express.json());

// Use the PORT from the .env file
const PORT = process.env.PORT || 3000;

app.use('/api', userRouter);
app.use('/api', blogcreatorRouter);
app.use('/api', achievementRouter);
app.get('/api', (req, res) => {
    res.json({ "Test": ["Test1"] });
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

module.exports = app;
