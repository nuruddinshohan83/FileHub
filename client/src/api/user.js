let baseUrl = import.meta.env.VITE_BASE_URL
import axios from "axios"
console.log()
function postLogin(data) {
  console.log(data, "post login")
  return axios.post(`http://localhost:3000/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
export { postLogin }
