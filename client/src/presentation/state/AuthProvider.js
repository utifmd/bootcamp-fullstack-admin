import { AuthContext } from "./"
import { getAccountInfo, signOut } from "../../domain"

const AuthProvider = ({children}) => {
    const accountInfo = getAccountInfo()
    const value = {
        ...accountInfo, signOut
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider