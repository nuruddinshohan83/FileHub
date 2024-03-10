import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const app = express()
mongoose
  .connect("mongodb://127.0.0.1:27017/filehub", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })
app.listen(process.env.EXPRESS_PORT, () => {
  console.log("server is listening to port:" + process.env.EXPRESS_PORT)
})
