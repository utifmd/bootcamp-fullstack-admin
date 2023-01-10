import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./"

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({ token: null, error: {}, loading: false })
    const navigate = useNavigate()
    // const location = useLocation()

    const handleLogin = async (email, password) => {
        console.log("handleLogin trigger")
        try {
            setAuth({loading: true})
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    email === "u@m.com" && password === "12" 
                        ? resolve({
                            name: "Utif milkedori", 
                            imageUrl: "https://via.placeholder.com/150"
                        })
                        : reject({error: {
                            message: "Invalid user"
                        }})
                }, 2000);
            })
            console.log(token)
            setAuth({ token, loading: false })
            navigate("/feeds", { replace: true })
        } catch (error) {
            setAuth({ error, loading: false })
            console.log(error)
        }
    }
    const handleRegister = async (email, password) => {
        console.log("handleLogin trigger")
        try {
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
            setAuth(response)
            navigate("/driver/edit")
        } catch (error) {
            setAuth(error)
        }
    }
    const handleLogout = () => {
        setAuth({ token: null, error: {}, loading: false })
    }
    const value = {
        auth,
        onLogin: handleLogin,
        onRegister: handleRegister,
        onLogout: handleLogout
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider