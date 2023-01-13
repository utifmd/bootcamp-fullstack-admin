const { Story, StoryRequest, Message } = require("../models")
class Controller {
    static async check(req, resp) {
        try {
            console.log("story check")
            const userId = resp.locals.userId
            const response = await Story.findOne({ where: { UserId: userId } })
            response
                ? resp.status(403).send(new Message(false))
                : resp.status(200).send(new Message(true))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("story create")
            req.body.userId = resp.locals.userId
            const request = new StoryRequest(req.body)
            const response = new Message({ message: `Story has been saved.` })

            await Story.create(request)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async delete(req, resp) {
        try {
            console.log("history delete")
            const targetUserId = req.params.userId

            const state = await Story.destroy({ where: { UserId: targetUserId } })
            let text = state === 1
                ? `Story with userId ${targetUserId} has been deleted`
                : { message: `Couldn\'t delete story with targetUserId ${targetUserId}` }

            resp.status(state === 1? 200: 403).send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async deleteAll(req, resp) {
        try {
            console.log("history delete all")
            const state = await Story.destroy({ where: {}, truncate: true })
            let text = state === 1
                ? { message: `Couldn\'t delete stories` }
                : `All stories has been deleted`

            resp.status(200).send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
}
module.exports = Controller