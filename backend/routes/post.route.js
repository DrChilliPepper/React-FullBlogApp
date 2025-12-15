import express from "express"
import { getPosts, getPost, createPost, deletePost, uploadAuth, featurePost } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.delete("/:id", deletePost)
router.get("/:slug", getPost);
router.post("/", createPost);
router.patch("/feature", featurePost)

export default router