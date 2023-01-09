import { Driver, DriverEdit, DriverInfo } from "../views/pages"

const router = [
    {
        path: "drivers/",
        element: <Driver />
    },
    {
        path: "drivers/info",
        element: <DriverInfo />
    },
    {
        path: "drivers/edit",
        element: <DriverEdit />
    }
]
export default router