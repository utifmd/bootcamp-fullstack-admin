const { Vehicle, History, VehicleRequest, VehicleResponse, Message } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await Vehicle.findAll()
            const response = VehicleResponse.asList(data)
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async read(req, resp) {
        try {
            const { id } = req.params
            console.log(`"vehicle read" ${id}`)
            const data = await Vehicle.findByPk(id, {include: History})
            const response = new VehicleResponse(data)
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("vehicle create")
            const request = new VehicleRequest(req.body)
            const data = await Vehicle.create(request)
            const response = new VehicleResponse(data)
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async delete(req, resp) {
        try {
            const { id } = req.params
            resp.json(`"vehicle delete" ${id}`)
            const state = await Vehicle.destroy({ where: { id }})
            let text = state === 1 
                ? `Category with id ${id} has been deleted` 
                : { message: `Couldn\'t delete category with id ${id}` }
            resp.send(new Message(text))
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { id } = req.params
            const request = new VehicleRequest(req.body)
            console.log(`vehicle update ${req.params.id}`)
            const [state] = await Vehicle.update(request, { where: { id }})
            let text = state === 1 
                ? `Vehicle with id ${id} has been updated` 
                : { message: `Couldn\'t update vehicle with id ${id}` }
            resp.send(new Message(text))
            
        } catch (error) {
            resp.send(new Message(error))
        }
    }
}
module.exports = Controller