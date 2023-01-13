import { useLoaderData } from "react-router-dom"
import VehicleForm from "./VehicleForm"

const Edit = () => {
    const { vehicle, error } = useLoaderData()
    return <VehicleForm 
        errorLoader={error}
        isEdit={true} 
        vehicle={vehicle}/>
}
export default Edit