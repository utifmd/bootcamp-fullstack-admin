import { redirect } from "react-router-dom"
import { vehicleValidations } from "../presentation/views/helper"
import { Service } from "../data"
import { getAccountInfo } from "./authUsecase"
import Swal from "sweetalert2"

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

        console.log(JSON.stringify(fields, null, 2))
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
        const { access_token } = getAccountInfo()

        return await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) { 
                const response = await Service.deleteVehicle(access_token, params.id)
                if (!response.data) {
                    return { error: { message: "There was an error occurred." } }
                }
                return redirect(`../list`)
            }
            return null
        }).catch(error => {
            const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
            return { error: { message } }
        })
    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
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
            await Service.putVehicle(
                access_token, params.id, fields, `multipart/form-data`
            )
            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
        return { error: { message } }
    }
}
const putVehicleStatus = async ({ request }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const { id, status } = Object.fromEntries(formData)

        await Service.checkSpaceStories(access_token)
        await Service.putVehicleStatus(access_token, id, { status })
        await Service.postStory(access_token, { vehicleId: id })
        await Service.postFeeds(access_token, { vehicleId: id })

        return redirect(`../list`)
    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `You have taken another car.`
        return { error: { message } }
    }
}
const searchVehicle = async ({ request }) => {
    try {
        const formData = await request.formData()
        const { query } = Object.fromEntries(formData)
        const vehicles = await Service.searchVehicles(query)
        if (!vehicles.data) {
            return { error: { message: "There was an error occurred." } }
        }
        console.log(vehicles.data)
        return { vehicles: vehicles.data }
    } catch (error) {
        return { error }
    }
}
const vehicleListAction = async ({ request }) => {
    switch (request.method) {
        case 'POST':
            return await searchVehicle({ request })
        case 'PUT':
            return await putVehicleStatus({ request })
        default:
            return { error: { message: `Unknown action` } }
    }
}
export {
    getVehicles, getVehicle, postVehicle,
    putVehicle, deleteVehicle, vehicleListAction
}