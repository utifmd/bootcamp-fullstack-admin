const { Vehicle, Sequelize, History, VehicleRequest, VehicleResponse, Message } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await Vehicle.findAll({order: [['createdAt', 'DESC']]})
            const response = VehicleResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async readAllBy(req, resp) {
        try {
            const { query } = req.params
            const name = Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${query.toLowerCase()}%` 
            )
            const data = await Vehicle.findAll({where: name})
            const response = VehicleResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async read(req, resp) {
        try {
            const { id } = req.params
            console.log(`"vehicle read" ${id}`)
            const data = await Vehicle.findByPk(id, {include: History})
            const response = new VehicleResponse(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("vehicle create")
            req.body.userId = resp.locals.userId
            const request = new VehicleRequest(req.body)
            const data = await Vehicle.create(request)
            const response = new VehicleResponse(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async delete(req, resp) {
        try {
            const { id } = req.params
            req.body.userId = resp.locals.userId
            console.log(`vehicle delete ${id}`)
            const state = await Vehicle.destroy({ where: { id }})
            let text = state === 1 
                ? `Category with id ${id} has been deleted` 
                : { message: `Couldn\'t delete category with id ${id}` }
                
            resp.status(state === 1? 200: 403).send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { id } = req.params
            req.body.userId = resp.locals.userId
            const request = new VehicleRequest(req.body)
            console.log(`vehicle update ${req.params.id}`)
            const [state] = await Vehicle.update(request, { where: { id }})
            let text = state === 1 
                ? `Vehicle with id ${id} has been updated` 
                : { message: `Couldn\'t update vehicle with id ${id}` }
            resp.status(state === 1? 200: 404).send(new Message(text))
            
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
}
module.exports = Controller