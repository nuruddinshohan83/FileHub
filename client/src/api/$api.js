import Axios from "axios"
import { notifications } from "@mantine/notifications"
import Cookies from "js-cookie"
import { decrypt } from "../utils/cookieParser"

const $api = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

$api.interceptors.request.use((config) => {
  const data = Cookies.get("userInfo")
  let parsedData = JSON.parse(data)
  const token = decrypt(parsedData.token)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers.Accept = "application/json"
  return config
})

$api.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    const message = err.response?.data?.error || err.message
    if (err.response?.data?.message && err.response?.status !== 401) {
      return notifications.show({
        title: "Error",
        message: err.response?.data?.message,
        color: "red",
      })
    }
    if (err.response?.status !== 401) {
      notifications.show({
        title: "Error",
        message,
        color: "red",
      })
    }
    return Promise.reject(err)
  }
)

export default $api
