const { History, Vehicle, User, HistoryRequest, HistoryResponse, Message, Sequelize } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await History.findAll({
                include: [Vehicle, User],
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            const response = HistoryResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async readAllByDateRange(req, resp) {
        try {
            const { dateStart, dataEnd } = req.params
            let end = dataEnd || new Date()
            console.log(dateStart, end)
            const data = await History.findAll({
                where: {
                    createdAt: {
                        [Sequelize.Op.between]: [dateStart, end]
                    }
                },
                include: [Vehicle, User],
                order: [['createdAt', 'DESC']]
            })
            const response = HistoryResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("history create")
            req.body.userId = resp.locals.userId
            const request = new HistoryRequest(req.body)
            const data = await History.create(request)
            const response = new HistoryResponse(data)

            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { historyId, targetUserId } = req.params
            console.log('targetUserId', targetUserId)
            req.body.userId = targetUserId
            const request = new HistoryRequest(req.body)
            console.log(`history update ${req.params.historyId}`)
            const [state] = await History.update(request, { where: { id: historyId }})
            let text = state === 1 
                ? `History with historyId ${historyId} has been updated` 
                : { message: `Couldn\'t update history with historyId ${historyId}` }
            resp
                .status(state === 1? 200: 404)
                .send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
}
module.exports = Controller