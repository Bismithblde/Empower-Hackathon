const express = require('express');
const { updateAchievement, getAchievements } = require('../controllers/achievementController');

const router = express.Router();

// create-blog
router.post('/update-achievement', updateAchievement);
router.post('/get-achievements', getAchievements)


module.exports = router;