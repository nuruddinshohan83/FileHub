import mongoose from "mongoose"

let userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  id: String,
  email: String,
  password: String,
})
const User = mongoose.model("User", userSchema)
export default User
