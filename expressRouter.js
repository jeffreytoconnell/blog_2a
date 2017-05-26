const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const {BlogPosts} = require('./models');

BlogPosts.create("First Blog", "BLAH", "Jeff");
BlogPosts.create("Second Blog", "WTH", "Jeff");

router.get('/', (req, res) => {
    console.log("Test");
    res.json(BlogPosts.get())
});

module.exports = router;
