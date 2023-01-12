const { User, AuthRequest, AuthResponse, Message, UserResponse } = require("../models")
const { isEncryptionMatches, tokenGenerator } = require("../helper")

class Controller {
    static async read(req, resp) {
        try {
            const { email, password } = req.body
            const data = await User.findOne({ where: { email } })

            if (!data) {
                resp.status(404).send(new Message({ message: 'User not found.' }))
                return
            }
            if (!isEncryptionMatches(password, data.password)) {
                resp.status(403).send(new Message({ message: 'Invalid password.' }))
                return
            }
            const token = tokenGenerator(data.id)
            resp.status(200).send(new AuthResponse(token))

        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async readBy(req, resp) {
        try {
            const id = resp.locals.userId
            const data = await User.findByPk(id)

            if (!data) {
                resp.status(404).send(new Message({ message: 'User not found.' }))
                return
            }
            resp.status(200).send(new UserResponse(data))

        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("user create")
            const request = new AuthRequest(req.body)
            const isEmailExist = await User.findOne({ where: {email: request.email} })
            if(isEmailExist){
                resp.status(403).send(new Message({message: `User already exist.`}))
                return
            }
            const data = await User.create(request)
            const token = tokenGenerator(data.id)

            const response = new AuthResponse(token)
            resp.status(200).send(response)

        } catch (error) {
            resp.status(400).send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const id = resp.locals.userId
            const { currentPassword, password } = req.body
            
            const data = await User.findByPk(id)
            if (!data) {
                resp.status(404).send(new Message({ message: 'User not found.' }))
                return
            }
            if (!isEncryptionMatches(currentPassword, data.password)) {
                resp.status(403).send(new Message({ message: 'Invalid password.' }))
                return
            }
            const token = tokenGenerator(data.id)
            const [state] = await User.update({password},{ where:{ id } })

            state === 1
                ? resp.status(200).send(new AuthResponse(token))
                : resp.status(403).send(new Message({message: `Couldn\'t change user with id ${id}`}))
                
        } catch (error) {
            resp
                .status(400)
                .send(new Message(error))
        }
    }
    static async updateBy(req, resp) {
        try {
            const id = resp.locals.userId
            const request = new UserResponse(req.body)
            
            const [state] = await User.update(request,{ where:{ id } })
            state === 1
                ? resp.status(200).send(new UserResponse(data))
                : resp.status(403).send(new Message({message: `Couldn\'t change user with id ${id}`}))
                
        } catch (error) {
            resp
                .status(400)
                .send(new Message(error))
        }
    }
}
module.exports = Controller