const express = require("express");
const router = express.Router();
const { getPost, createPost, updatePost, deletePost } = require("../controllers/postController");

// GET /api/v1/posts
router.get("/", getPost);
// POST /api/v1/posts
router.post("/", createPost);
// PUT /api/v1/posts/:id
router.put("/:id", updatePost);
// DELETE /api/v1/posts/:id
router.delete("/:id", deletePost);

module.exports = router;