import React from "react"
import { Navigate } from "react-router-dom"
import { getAccountInfo } from "../../domain"
const AuthScope = ({children}) => {
    const { access_token } = getAccountInfo()
    
    if(!access_token) {
        return <Navigate to="/" replace />
    }
    return children
}
export default AuthScope