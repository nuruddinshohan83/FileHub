import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
  const token = req.headers.authorization
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" })
    }
    req.data = decoded
    next()
  })
}
