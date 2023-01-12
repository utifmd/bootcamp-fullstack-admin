import { redirect } from "react-router-dom"
import { vehicleValidations } from "../presentation/views/helper"
import { Service } from "../data"
import { getAccountInfo } from "./authUsecase"

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
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = vehicleValidations(fields)

        if (isValid) {
            await Service.postVehicle(access_token, fields, `multipart/form-data`)

            return redirect(`../list`)
        }
        return { error }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const deleteVehicle = async ({ params }) => {
    try {
        console.log("delete vehicle")
        const response = await Service.deleteVehicle(params.id)
        console.log("token ", response.headers.get("access_token"))
        if (!response.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return redirect("../list")
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const putVehicle = async ({ request, params }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = vehicleValidations(fields)

        if (isValid) {
            await Service.putVehicle(access_token, params.id, fields, `multipart/form-data`)

            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const putVehicleStatus = async ({ request }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const {id, status} = Object.fromEntries(formData)
        
        await Service.putVehicleStatus(access_token, id, {status})
        // TODO: add table ongoing

        return redirect(`../list`)
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
export {
    getVehicles, getVehicle, postVehicle, putVehicle, deleteVehicle, putVehicleStatus
}