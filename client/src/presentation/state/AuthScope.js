import { Navigate } from "react-router-dom"
import { useAuth } from "./"

const AuthScope = ({children}) => {
    const { token } = useAuth()
    console.log("AuthScope", token)
    
    // if(!token) {
    //     return <Navigate to="/" replace />
    // }
    return children
}
export default AuthScope