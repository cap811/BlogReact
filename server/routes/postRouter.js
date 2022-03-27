const express = require("express");
const router = express.Router();
const { getPost, createPost, updatePost, deletePost } = require("../controllers/postController");

// GET /api/v1/posts
router.route("/").get(getPost).post(createPost);
// GET /api/v1/posts/:id
router.route("/:id").delete(deletePost).put(updatePost);

module.exports = router;

