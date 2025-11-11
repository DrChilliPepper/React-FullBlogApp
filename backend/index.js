import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webhookRouter from "./routes/webhook.route.js"
import dotenv from "dotenv";
import { clerkMiddleware, requireAuth } from "@clerk/express";

dotenv.config();

const app = express()
app.use(clerkMiddleware())
app.use("/webhooks", webhookRouter)
app.use(express.json())

// app.get("/auth-state", (req, res) => {
//     const authState = req.auth();
//     res.json(authState)
// });
// app.get("/protect", (req, res) => {
//     const { userId } = req.auth();
//     if (!userId) {
//         return res.status(401).json("Not Authorized")
//     }
//     res.status(200).json("Content")
// });
// app.get("/protect2", requireAuth(), (req, res) => {
// });

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.use((error, req, res, next) => {

    res.status(error.status || 500)

    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack,
    })
})

app.listen(3000, () => {
    connectDB()
    console.log("Server!")
})