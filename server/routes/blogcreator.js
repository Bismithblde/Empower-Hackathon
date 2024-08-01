const express = require('express');
const { createBlog } = require('../controllers/blogcreatorController');

const router = express.Router();

// create-blog
router.post('/create-blog', createBlog);



module.exports = router;