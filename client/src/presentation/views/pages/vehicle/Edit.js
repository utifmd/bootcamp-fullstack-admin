import { useLoaderData } from "react-router-dom"
import VehicleForm from "./VehicleForm"

const Edit = () => {
    const vehicle = useLoaderData()
    return <VehicleForm isEdit={true} vehicle={vehicle}/>
}
export default Edit