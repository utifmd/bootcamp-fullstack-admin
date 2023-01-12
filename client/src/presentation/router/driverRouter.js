import { Route } from "react-router-dom"
import { DashboardUser, Driver, DriverEdit, DriverInfo, Error } from "../views/pages"
import { getDrivers, getDriver, putDriver } from "../../domain"
import { AuthScope, AdminScope } from "../state"

const router = () => 
<Route 
    path="/driver" 
    element={<DashboardUser/>}>
        
    <Route
        index
        element={<Error />} />

    <Route 
        path="list"
        loader={getDrivers}
        element={<AuthScope><Driver/></AuthScope>} />

    <Route 
        path="info/:id"
        loader={getDriver}
        element={<AuthScope><DriverInfo/></AuthScope>} />

    <Route 
        path="edit/:id"
        loader={getDriver}
        action={putDriver}
        element={<AuthScope><AdminScope><DriverEdit/></AdminScope></AuthScope>} />
</Route>

export default router