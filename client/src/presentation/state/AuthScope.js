import { Navigate } from "react-router-dom"
import { useAuth } from "./index"

const AuthScope = ({children}) => {
    const { token } = useAuth()
    if(!token) {
        return <Navigate to="/auth/login" replace />
    }
    return children
}
export default AuthScope