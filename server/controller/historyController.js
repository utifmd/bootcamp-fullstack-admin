const { History, Vehicle, User, HistoryRequest, HistoryResponse, Message } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await History.findAll({include: [Vehicle, User]})
            const response = HistoryResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("history create")
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
            const { id } = req.params
            
            req.body.userId = id
            const request = new HistoryRequest(req.body)
            console.log(`history update ${req.params.id}`)
            const [state] = await History.update(request, { where: { id }})
            let text = state === 1 
                ? `History with id ${id} has been updated` 
                : { message: `Couldn\'t update history with id ${id}` }
            resp
                .status(state === 1? 200: 404)
                .send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
}
module.exports = Controller