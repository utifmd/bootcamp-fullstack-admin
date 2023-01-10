import { Route } from "react-router-dom"
import { DashboardUser, Driver, DriverEdit, DriverInfo, Error } from "../views/pages"
import { AuthScope } from "../state"

const router = () => 
<Route 
    path="/driver" 
    element={<AuthScope><DashboardUser/></AuthScope>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        element={<Driver/>} />

    <Route 
        path="info"
        element={<DriverInfo/>} />

    <Route 
        path="edit" 
        element={<DriverEdit/>} />
</Route>

export default router