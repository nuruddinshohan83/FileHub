import Cookies from "js-cookie"
import React, { useState, useContext, createContext } from "react"

import { decrypt } from "../cookieParser"

const AuthContext = React.createContext()
export function useAuthContext() {
  return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
  let [userData, setUserData] = useState(() => {
    let data = Cookies.get("userInfo")
    if (data) {
      let parsedData = JSON.parse(data)
      console.log(parsedData)
      return { ...parsedData, token: decrypt(parsedData.token) }
    } else return undefined
  })
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
