const BlogCreator = require("../models/blogcreatorModel")
const createBlog = async (req, res) => {

    const {title, text, type} = req.body;

    try {
        const blog = await BlogCreator.createBlog(title, text, type)
        res.status(200).json({title, text, type});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getBlogs = async (req, res) => {
    const { type } = req.body;
  
    try {
      const blogs = await BlogCreator.getBlogs(type);
      res.status(200).json({ blogs });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

const getBlog = async (req, res) => {
    const { _id } = req.body;
    try {
        const blog = await BlogCreator.getBlog(_id);
        res.status(200).json({ blog })

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {createBlog, getBlogs, getBlog}