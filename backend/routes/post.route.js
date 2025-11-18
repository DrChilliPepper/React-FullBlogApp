import express from "express"
import { getPosts, getPost, createPost, deletePost, uploadAuth } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.delete("/:id", deletePost)
router.get("/:slug", getPost);
router.post("/", createPost);

export default router