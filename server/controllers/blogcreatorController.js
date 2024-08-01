const BlogCreator = require("../models/blogcreatorModel")
const createBlog = async (req, res) => {

    const {title, text} = req.body;

    try {
        const blog = await BlogCreator.createBlog(title, text)
        res.status(200).json({title, text});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {createBlog}