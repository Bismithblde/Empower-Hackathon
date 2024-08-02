const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const achievementDetailSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    animationTriggered: { type: Boolean, default: false },
    dateEarned: { type: String, required: true } 
});

const achievementSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    achievement: [achievementDetailSchema] 
});

achievementSchema.statics.updateAchievement = async function (username, achievements) {
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            throw new Error('User not found');
        }
        const userID = user._id.toString();

        let achievementData = await this.findOne({ id: userID });
        if (achievementData) {
            const response = await this.updateOne({ id: userID }, { achievement: achievements });
            return response;
        } else {
            const response = await this.create({ id: userID, achievement: achievements });
            return response;
        }
    } catch (error) {
        throw new Error(`Update failed: ${error.message}`);
    }
};

achievementSchema.statics.getAchievements = async function (username) {
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            throw new Error('User not found');
        }
        const userID = user._id.toString();

        let achievementData = await this.findOne({ id: userID });
        if (achievementData) {
            return achievementData;
        } else {
            throw new Error("No achievement found")
        }
    } catch (error) {
        throw new Error(`Get All failed: ${error.message}`);
    }
}

const Achievement = mongoose.model('Achievement', achievementSchema);
module.exports = Achievement;
