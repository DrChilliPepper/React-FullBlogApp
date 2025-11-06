import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(3000, () => {
    connectDB()
    console.log("Server!")
})