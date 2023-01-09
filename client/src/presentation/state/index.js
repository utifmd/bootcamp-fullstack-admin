import { createContext, useContext } from "react"
import AuthProvider from "./AuthProvider"
import AuthScope from "./AuthScope"

const AuthContext = createContext(null)
const useAuth = () => useContext(AuthContext)

export {
    AuthProvider, AuthScope, AuthContext, useAuth
}