import { useState } from "react"
import { AuthContext } from "./index"

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const handleLogin = async (email, password) => {
        console.log("handleLogin trigger")
        const response = await new Promise((resolve, reject) => {
            const account = {
                name: "Utif milkedori", 
                imageUrl: "https://via.placeholder.com/150"
            }
            setTimeout(() => {
                console.log("handleLogin trigger time out")
                email === "u@m.com" && password === "12" 
                    ? resolve(account)
                    : reject(null)
            }, 2000);
        })
        setToken(response)
    }
    const handleLogout = () => {
        setToken(null)
    }
    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider