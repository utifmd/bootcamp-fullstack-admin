const { User, History, UserRequest, UserResponse, Message, Sequelize } = require("../models")
class Controller {
    static async readAll(req, resp) {
        try {
            const data = await User.findAll({order: [['createdAt', 'DESC']]})
            const response = UserResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async readAllExceptAdmin(req, resp) {
        try {
            const data = await User.findAll(
                {
                    where: {
                        role: {
                            [Sequelize.Op.ne]: 'admin'
                        }
                    }, 
                    order: [
                        ['createdAt', 'DESC']
                    ]
                }
            )
            const response = UserResponse.asList(data)
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
            const data = await User.findAll({ where: name }) 
            const response = UserResponse.asList(data)
            resp.status(200).send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async read(req, resp) {
        try {
            const id = resp.locals.userId
            console.log(`"user read" ${id}`)
            const data = await User.findByPk(id, { include: History })
            const response = data
                ? new UserResponse(data)
                : new Message({ message: `User with id ${id} does\'nt exist` })
            resp
                .status(data ? 200 : 403)
                .send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async readBy(req, resp) {
        try {
            const { id } = req.params
            console.log(`"user read" ${id}`)
            const data = await User.findByPk(id, { include: History })
            const response = data
                ? new UserResponse(data)
                : new Message({ message: `User with id ${id} does\'nt exist` })
            resp
                .status(data ? 200 : 403)
                .send(response)
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async delete(req, resp) {
        try {
            const { id } = req.params // resp.locals.userId
            console.log(`user delete ${id}`)
            const state = await User.destroy({ where: { id } })
            let text = state === 1
                ? `User with id ${id} has been deleted`
                : { message: `Couldn\'t delete category with id ${id}` }
            resp
                .status(state === 1 ? 200 : 404)
                .send(new Message(text))
        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { targetUserId } = req.params
            const request = new UserRequest(req.body)
            const [state] = await User.update(request, { where: { id: targetUserId } })
            let text = state === 1
                ? `User with targetUserId ${targetUserId} has been updated`
                : { message: `Couldn\'t update user with targetUserId ${targetUserId}` }
            resp
                .status(state === 1 ? 200 : 404)
                .send(new Message(text))

        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
}
module.exports = Controller