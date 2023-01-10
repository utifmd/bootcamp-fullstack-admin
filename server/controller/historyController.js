const { History, Vehicle, User, HistoryRequest, HistoryResponse, Message } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await History.findAll({include: [Vehicle, User]})
            const response = HistoryResponse.asList(data)
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("history create")
            const request = new HistoryRequest(req.body)
            const data = await History.create(request)
            const response = new HistoryResponse(data)
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { id } = req.params
            const request = new HistoryRequest(req.body)
            console.log(`history update ${req.params.id}`)
            const [state] = await History.update(request, { where: { id }})
            let text = state === 1 
                ? `History with id ${id} has been updated` 
                : { message: `Couldn\'t update history with id ${id}` }
            resp.send(new Message(text))
            
        } catch (error) {
            resp.send(new Message(error))
        }
    }
}
module.exports = Controller