import { redirect } from "react-router-dom"
import { vehicleValidations } from "../presentation/views/helper"
import { Service } from "../data"

const getVehicles = async () => {
    try {
        const vehicles = await Service.getVehicles()
        if (!vehicles.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { vehicles: vehicles.data }
    } catch (error) {
        return { error }
    }
}
const getVehicle = async ({ params }) => {
    try {
        const vehicle = await Service.getVehicle(params.id)
        if (!vehicle.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { vehicle: vehicle.data }
    } catch (error) {
        return { error }
    }
}
const postVehicle = async ({ request }) => {
    try {
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = vehicleValidations(fields)
        
        if (isValid) {
            await Service.postVehicle(fields)

            return redirect(`../list`)
        }
        return { error }
    } catch (error) {
        return { error }
    }
}
const putVehicle = async ({ request, params }) => {
    try {
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = vehicleValidations(fields)
        
        if (isValid) {
            await Service.putVehicle(params.id, fields)

            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        return { error }
    }
}
export {
    getVehicles, getVehicle, postVehicle, putVehicle
}