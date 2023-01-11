import { Route } from "react-router-dom"
import { DashboardUser, Vehicle, VehicleEdit, VehicleInfo, Error } from "../views/pages"
import { AuthScope } from "../state"
import { getVehicle, getVehicles } from "../../domain"

const router = () => 
<Route 
    path="/vehicle" 
    element={<AuthScope><DashboardUser/></AuthScope>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        loader={getVehicles}
        element={<Vehicle/>} />

    <Route 
        path="info/:id"
        loader={getVehicle}
        element={<VehicleInfo/>} />

    <Route 
        path="edit/:id" 
        loader={getVehicle}
        element={<VehicleEdit/>} />
</Route>

export default router