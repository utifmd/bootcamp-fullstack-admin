import { redirect } from "react-router-dom"
import { Service } from "../data"
import { driverValidations } from "../presentation/views/helper"

const getDrivers = async () => {
    try {
        const drivers = await Service.getDrivers()
        if (!drivers.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { drivers: drivers.data }
    } catch (error) {
        return { error }
    }
}
const getDriver = async ({ params }) => {
    try {
        const driver = await Service.getDriver(params.id)
        if (!driver.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { driver: driver.data }
    } catch (error) {
        return { error }
    }
}
const putDriver = async ({ request, params }) => {
    try {
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = driverValidations(fields)
        
        if (isValid) {
            await Service.putDriver(params.id, fields)

            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        return { error }
    }
}
export {
    getDrivers, getDriver, putDriver
}