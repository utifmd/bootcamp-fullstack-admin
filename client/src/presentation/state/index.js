import { createContext, useContext } from "react"
import AuthProvider from "./AuthProvider"
import AuthScope from "./AuthScope"
import AdminScope from "./AdminScope"

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

export {
    AuthContext, useAuth, AuthProvider, AuthScope, AdminScope
}