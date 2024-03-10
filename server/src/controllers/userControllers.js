import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
async function registerUser(req, res) {
  try {
    let { userName, password, email } = req.body
    // console.log(userName, password, email)
    let userExist = await checkUserExist(userName)
    if (userExist) {
      res.status(210).json({ message: "user name already exit" })
    } else {
      let hashedPassword = await hashedPasswordGenerator(password)

      let user = new User({ userName, password: hashedPassword, email })
      user.save().then((response) => {
        console.log(response, "user created-----------")
        res.status(210).json({ ...response })
      })
    }
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
async function loginUser(req, res) {
  try {
    let { userName, password } = req.body
    // console.log("--try--", userName, password)
    let userExist = await checkUserExist(userName)

    if (userExist) {
      bcrypt.compare(password, userExist.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: err })
        } else if (result) {
          let token = jwt.sign(
            { id: userExist._id },
            process.env.TOKEN_SECRET,
            {
              expiresIn: "1800h",
            }
          )
          // console.log(token)
          res.status(200).json({
            message: "Login successful",
            token: token,
            data: userExist,
          })
        } else {
          res.status(401).json({ error: "Invalid username or password" })
        }
      })
    }
  } catch {
    console.log("--error login --")
  }
}

async function getUserList(req, res) {
  try {
    const examples = await User.find()
    res.json(examples)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
async function checkUserExist(userName) {
  let userExist = await User.findOne({ userName: userName })
  return userExist
}
async function hashedPasswordGenerator(password) {
  let hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}
export { registerUser, getUserList, loginUser }
