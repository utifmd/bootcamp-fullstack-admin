import { Route } from "react-router-dom"
import { DashboardUser, Driver, DriverEdit, DriverInfo, Error } from "../views/pages"
import { AuthScope } from "../state"
import { getDrivers, getDriver, putDriver } from "../../domain"

const router = () => 
<Route 
    path="/driver" 
    element={<AuthScope><DashboardUser/></AuthScope>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        loader={getDrivers}
        element={<Driver/>} />

    <Route 
        path="info/:id"
        loader={getDriver}
        element={<DriverInfo/>} />

    <Route 
        path="edit/:id"
        loader={getDriver}
        action={putDriver}
        element={<DriverEdit/>} />
</Route>

export default router