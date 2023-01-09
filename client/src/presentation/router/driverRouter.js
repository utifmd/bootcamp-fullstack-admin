import { Route } from "react-router-dom"
import { DashboardUser, Driver, DriverEdit, DriverInfo, Error } from "../views/pages"

const router = () => 
<Route 
    path="/driver" 
    element={<DashboardUser/>}>
        
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