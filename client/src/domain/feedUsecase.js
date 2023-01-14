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
const rangeFeeds = async ({request}) => {
    try {
        const formData = await request.formData()
        const { filterpicker } = Object.fromEntries(formData)
        const feeds = await Service.getRangedFeeds(filterpicker, null)
        if (!feeds.data) {
            return { error: { message: "There was an error occurred." } }
        }
        console.log(feeds.data)
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
            let feedFields = {
                id: params.id, 
                targetUserId: params.userId, 
                income: fields.income
            }
            await Service.putFeeds(access_token, feedFields)
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
    getFeeds, rangeFeeds, putHistory
}