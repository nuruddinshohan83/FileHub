import { Router, response } from "express"
import * as path from "path"
import multer from "multer"
import File from "../models/File.js"
import verifyToken from "../utils/verifyToken.js"

let fileRoutes = Router()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/file")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const fileExt = path.extname(file.originalname)
    console.log(fileExt, "----------------")
    cb(null, uniqueSuffix + fileExt)
  },
})
const upload = multer({ storage: storage })
fileRoutes.get("/", verifyToken, async (req, res) => {
  let ownedFileList = await File.find({ owner: req.data.id })
  console.log(ownedFileList)
  res.status(200).json({ data: [...ownedFileList] })
})

fileRoutes.post("/", verifyToken, upload.single("file"), async (req, res) => {
  const publicUrl =
    req.protocol + "://" + req.get("host") + "/file/" + req.file.filename
  console.log(publicUrl)
  console.log(req.data, "-------")
  let file = File({
    title: req.file.originalname,
    location: "/hub/" + req.file.filename,
    fileName: req.file.filename,
    owner: req.data.id,
  })
  await file.save().then((response) => {
    console.log(response)
    res.json(response)
  })
})

export default fileRoutes
