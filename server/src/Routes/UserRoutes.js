import { Router } from "express"
import User from "../Models/User.js"
import {
  getUserList,
  loginUser,
  registerUser,
} from "../Controllers/userControllers.js"
let userRoutes = Router()

userRoutes.get("/user", getUserList)
userRoutes.post("/register", registerUser)
userRoutes.post("/login", loginUser)

export default userRoutes
