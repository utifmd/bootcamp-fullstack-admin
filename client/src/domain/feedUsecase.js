import { redirect } from "react-router-dom"
import { Service } from "../data"
import { getAccountInfo } from "./authUsecase"

const getFeeds = async () => {
    try {
        const feeds = await Service.getFeeds()
        if (!feeds.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { feeds: feeds.data }
    } catch (error) {
        return { error }
    }
}
const putHistory = async ({ request, params }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const error = { message: `Income must not be blank` }

        if (fields?.income && params?.id && params?.vehicleId && params?.userId) {
            await Service.putFeeds(access_token, params.id, {income: fields.income})
            await Service.putVehicleStatus(access_token, params.vehicleId, {status: "standby"})
            await Service.removeStory(access_token, params.userId)

            return redirect(`/`)
        }
        return { error }
    } catch (error) {
        const message = error.response.data.error
        return { error: { message } }
    }
}

export {
    getFeeds, putHistory
}