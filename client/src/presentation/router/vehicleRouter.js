import { Route } from "react-router-dom"
import { DashboardUser, Vehicle, VehicleEdit, VehicleInfo, Error } from "../views/pages"
import { AuthScope } from "../state"

const router = () => 
<Route 
    path="/vehicle" 
    element={<AuthScope><DashboardUser/></AuthScope>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        element={<Vehicle/>} />

    <Route 
        path="info"
        element={<VehicleInfo/>} />

    <Route 
        path="edit" 
        element={<VehicleEdit/>} />
</Route>

export default router