const asyncHandler = require('express-async-handler');

// Model: Post
const Post = require('../models/postModel');

// @desc 	GET posts
// @routes 	GET /api/v1/posts
// @access  Private
const getPost = asyncHandler( async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

// @desc 	POST posts
// @routes 	POST /api/v1/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  //if (!req.body?.text) {
    //res.status(400)
    //throw new Error('Please add a text field')
  //}

  const post = await Post.create({
    text: req.body.text,
  })

  res.status(200).json(post);
})

// @desc 	PUT posts
// @routes 	PUT /api/v1/posts
// @access  Private
const updatePost = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update post ${req.params.id}` });
});

// @desc 	DELETE posts
// @routes 	DELETE /api/v1/posts
// @access  Private
const deletePost = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
});
module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};

