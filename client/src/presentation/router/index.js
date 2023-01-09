import { createBrowserRouter } from "react-router-dom"
import { Home, Dashboard, Error } from "../views/pages"
import authRouter from "./authRouter"
import driverRouter from "./driverRouter"
import vehicleRouter from "./vehicleRouter"
const router = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    ...authRouter, 
    ...driverRouter,
    ...vehicleRouter
]
export default createBrowserRouter(router)