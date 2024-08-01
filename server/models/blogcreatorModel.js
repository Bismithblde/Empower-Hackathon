const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const blogCreatorSchema = new Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Blog', 'Scholarship'],
        required: true
    }
});

blogCreatorSchema.statics.createBlog = async function(title, text, type) {
    const blog = await this.create({title, text, type})
    return blog;
}
blogCreatorSchema.statics.getBlogs = async function(type) {
    if (type == "Blog" || type == "Scholarship") {
        const blogs = await this.find({type: type});
        return blogs
    }
    else {
        throw Error("Invalid Type")
    }

}
blogCreatorSchema.statics.getBlog = async function(_id) {
    const blog = await this.find({_id: _id})
    return blog;
}
const BlogCreator = mongoose.model('Blog', blogCreatorSchema);
module.exports = BlogCreator;
