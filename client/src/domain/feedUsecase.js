import { Service } from "../data"

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
export {
    getFeeds
}