import { redirect } from "react-router-dom"
import { Service } from "../data"
import { driverValidations } from "../presentation/views/helper"
import { getAccountInfo } from "./authUsecase"

const getDrivers = async () => {
    try {
        const drivers = await Service.getDrivers()
        if (!drivers.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { drivers: drivers.data }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const getDriver = async ({ params }) => {
    try {
        const { access_token } = getAccountInfo()
        const driver = await Service.getDriver(access_token, params.id)
        if (!driver.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { driver: driver.data }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const putDriver = async ({ request, params }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = driverValidations(fields)
        
        if (isValid) {
            await Service.putDriver(access_token, params.id, fields, `multipart/form-data`)

            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const approveDriver = async ({ request, params }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        console.log(JSON.stringify(fields))
        if (fields.role) {
            await Service.putDriver(access_token, params.id, fields, `multipart/form-data`)

            return redirect(`../info/${params.id}`)
        }
        return null
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const deleteDriver = async ({ params }) => {
    try {
        const { access_token } = getAccountInfo()

        console.log(`delete driver ${params.id}`)
        const response = await Service.deleteDriver(access_token, params.id)
        if (!response.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return redirect(`../list`)
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const searchDriver = async ({ request }) => {
    try {
        const formData = await request.formData()
        const { query } = Object.fromEntries(formData)
        const drivers = await Service.searchDrivers(query)
        if (!drivers.data) {
            return { error: { message: "There was an error occurred." } }
        }
        console.log(drivers.data)
        return { drivers: drivers.data }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}
const driverInfoAction = async ({request, params}) => {
    switch(request.method){
        case 'DELETE':
            return await deleteDriver({params})
        case 'PUT':
            return await approveDriver({request, params})
        default:
            return { error: { message: `default action` } }
    }
}
export {
    getDrivers, getDriver, putDriver, searchDriver, driverInfoAction
}