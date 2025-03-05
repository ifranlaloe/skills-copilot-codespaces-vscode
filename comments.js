// Create web server
// Express is a web application framework for Node.js
// It is designed for building web applications and APIs
// It is the standard server framework for Node.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// GET request
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});
