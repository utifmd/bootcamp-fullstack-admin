import { Route, Outlet, 
    createBrowserRouter, 
    createRoutesFromElements
} from "react-router-dom"
import authRoute from "./authRouter"
import driverRouter from "./driverRouter"
import vehicleRouter from "./vehicleRouter"
import feedRouter from "./feedRouter"
import { Home, Error } from "../views/pages"

const router = createRoutesFromElements(
    <Route
        path="/"
        element={<Outlet />}
        errorElement={<Error />}>

        <Route
            index 
            element={<Home />} />

        { authRoute() }
        { feedRouter() }
        { driverRouter() }
        { vehicleRouter() }
    </Route>
)
export default createBrowserRouter(router)