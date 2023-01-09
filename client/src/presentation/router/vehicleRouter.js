import { Vehicle, VehicleEdit, VehicleInfo } from "../views/pages"

const router = [
    {
        path: "vehicles/",
        element: <Vehicle />
    },
    {
        path: "vehicles/info",
        element: <VehicleInfo />
    },
    {
        path: "vehicles/edit",
        element: <VehicleEdit />
    }
]
export default router