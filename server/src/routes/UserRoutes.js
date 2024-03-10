import { Router } from "express"
import User from "../models/User.js"
import {
  getUserList,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js"
let userRoutes = Router()

userRoutes.get("/user", getUserList)
userRoutes.post("/register", registerUser)
userRoutes.post("/login", loginUser)

export default userRoutes
