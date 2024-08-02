const Achievement = require("../models/achievementModel");

const updateAchievement = async (req, res) => {
    const { username, achievements } = req.body;
    try {
        const response = await Achievement.updateAchievement(username, achievements);
        console.log("Success");
        res.status(200).json({ response, username, achievements });
    } catch (error) {
        console.error("Error:", error.message); 
        res.status(400).json({ error: error.message });
    }
};
const getAchievements = async (req, res) => {
    const { username } = req.body;
    try {
        const response = await Achievement.getAchievements(username)
        res.status(200).json({ response });

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}
module.exports = { updateAchievement, getAchievements };
