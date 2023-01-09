import { Route } from "react-router-dom"
import { DashboardUser, Vehicle, VehicleEdit, VehicleInfo, Error } from "../views/pages"
import { AuthScope } from "../state"

const router = () => 
<Route 
    path="/vehicle" 
    element={<DashboardUser/>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        element={<AuthScope><Vehicle/></AuthScope>} />

    <Route 
        path="info"
        element={<AuthScope><VehicleInfo/></AuthScope>} />

    <Route 
        path="edit" 
        element={<AuthScope><VehicleEdit/></AuthScope>} />
</Route>

export default router