import { Navigate } from "react-router-dom"
import { getAccountInfo } from "../../domain"
const AdminScope = ({children}) => {
    const { account } = getAccountInfo()
    
    if(account?.role !== "admin") {
        return <Navigate to="error" replace />
    }
    return children
}
export default AdminScope