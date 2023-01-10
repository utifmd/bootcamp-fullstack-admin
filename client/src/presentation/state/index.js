import { createContext, useContext } from "react"
import AuthProvider from "./AuthProvider"
import AuthScope from "./AuthScope"

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

export {
    AuthContext, useAuth, AuthProvider, AuthScope 
}