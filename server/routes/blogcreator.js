const express = require('express');
const { createBlog, getBlogs, getBlog} = require('../controllers/blogcreatorController');

const router = express.Router();

// create-blog
router.post('/create-blog', createBlog);
router.post('/get-blogs', getBlogs)
router.post('/get-blog', getBlog)


module.exports = router;