import Cookies from "js-cookie"
import * as CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_KEY


export function cookieStore(key, value) {
    console.log(value)
    if (value.token !== undefined) {
        let encryptedToken = encrypt(value.token)
        console.log(encryptedToken)
        let temp = { ...value, token: encryptedToken }
        console.log(temp)
        Cookies.set(key, JSON.stringify(temp))
    } else {
        Cookies.set(key, JSON.stringify(value))
    }
}

// const secretKey = process.env.REACT_APP_SECRET_KEY ? process.env.REACT_APP_SECRET_KEY : '12345'
export const encrypt = (plainText) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString()
    return cipherText
}

export const decrypt = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    //console.log(bytes, bytes.toString(CryptoJS.enc.Utf8), secretKey)
    return plainText
}
