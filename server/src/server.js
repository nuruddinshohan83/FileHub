import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import fileRoutes from "./routes/FileRoutes.js"
import userRoutes from "./routes/UserRoutes.js"

dotenv.config()
const app = express()
mongoose
  .connect("mongodb://127.0.0.1:27017/filehub")
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })
app.use(bodyParser.json())
app.use("/hub", express.static("./src/file"))
app.use("/", userRoutes)
app.use("/file", fileRoutes)
app.listen(process.env.EXPRESS_PORT, () => {
  console.log("server is listening to port:" + process.env.EXPRESS_PORT)
})
