import express from "express"
import { getPosts, getPost, createPost, deletePost } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/", getPosts);
router.delete("/:id", deletePost)
router.get("/:slug", getPost);
router.post("/", createPost);

export default router