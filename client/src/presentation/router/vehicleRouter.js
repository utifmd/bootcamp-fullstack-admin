import { Route } from "react-router-dom"
import { 
    DashboardUser, Vehicle, VehicleEdit, VehicleAdd, VehicleInfo, Error 
} from "../views/pages"
import { 
    deleteVehicle,
    getVehicle, getVehicles, postVehicle, putVehicle, putVehicleStatus
} from "../../domain"
import { AuthScope, AdminScope } from "../state"

const router = () => 
<Route 
    path="/vehicle" 
    element={<DashboardUser/>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        loader={getVehicles}
        action={putVehicleStatus}
        element={<AuthScope><Vehicle/></AuthScope>} />

    <Route 
        path="add"
        action={postVehicle}
        element={<AuthScope><VehicleAdd/></AuthScope>} />

    <Route 
        path="info/:id"
        loader={getVehicle}
        action={deleteVehicle}
        element={<AuthScope><VehicleInfo/></AuthScope>} />

    <Route 
        path="edit/:id" 
        loader={getVehicle}
        action={putVehicle}
        element={<AuthScope><AdminScope><VehicleEdit/></AdminScope></AuthScope>} />
</Route>

export default router