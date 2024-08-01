const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const blogCreatorSchema = new Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    }
});

blogCreatorSchema.statics.createBlog = async function(title, text) {
    const blog = await this.create({title, text})
    return blog;
}

const BlogCreator = mongoose.model('Blog', blogCreatorSchema);
module.exports = BlogCreator;
