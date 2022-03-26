// @desc 	GET posts
// @routes 	GET /api/posts
// @access  Private
const getPost = (req, res) => {
  res.status(200).json({ message: "Get post" });
};

// @desc 	POST posts
// @routes 	POST /api/posts
// @access  Private
const createPost = (req, res) => {
  res.status(200).json({ message: "Create post" });
};

// @desc 	PUT posts
// @routes 	PUT /api/posts
// @access  Private
const updatePost = (req, res) => {
  res.status(200).json({ message: "Update post" });
};

// @desc 	DELETE posts
// @routes 	DELETE /api/posts
// @access  Private
const deletePost = (req, res) => {
  res.status(200).json({ message: "Delete post" });
};
module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};

