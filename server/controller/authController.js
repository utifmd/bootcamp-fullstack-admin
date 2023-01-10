const { User, AuthRequest, AuthResponse, Message } = require("../models")
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
            const { userId } = req.body
            const request = new AuthRequest(req.body)
            console.log(`user update ${req.params.id}`)
            const [state] = await User.update(request, { where: { id: userId } })
            let text = state === 1
                ? `User with id ${userId} has been changed`
                : { message: `Couldn\'t change user with id ${userId}` }
            resp
                .status(state === 1 ? 200 : 404)
                .send(new Message(text))

        } catch (error) {
            resp
                .status(400)
                .send(new Message(error))
        }
    }
}
module.exports = Controller