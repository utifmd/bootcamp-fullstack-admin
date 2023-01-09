import { Route } from "react-router-dom"
import { DashboardUser, Driver, DriverEdit, DriverInfo, Error } from "../views/pages"
import { AuthScope } from "../state"

const router = () => 
<Route 
    path="/driver" 
    element={<DashboardUser/>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        element={<AuthScope><Driver/></AuthScope>} />

    <Route 
        path="info"
        element={<AuthScope><DriverInfo/></AuthScope>} />

    <Route 
        path="edit" 
        element={<AuthScope><DriverEdit/></AuthScope>} />
</Route>

export default router