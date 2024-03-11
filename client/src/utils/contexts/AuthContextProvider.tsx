import Cookies from "js-cookie"
import React, { useState, useContext } from "react"

import { propsChildrenType } from "../types/Common"

import { AuthContextStateType, AuthContextType } from "../types/AuthContextType"
import { decrypt } from "../cookieParser"

const AuthContext = React.createContext<AuthContextType>({
    userData: undefined,
    setUserData: () => undefined,
})
export function useAuthContext() {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }: propsChildrenType) => {
    let [userData, setUserData] = useState<AuthContextStateType>(() => {
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
