import mongoose from "mongoose"

let fileSchema = new mongoose.Schema({
  title: String,
  location: String,
  fileName: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})
const File = mongoose.model("File", fileSchema)
export default File
