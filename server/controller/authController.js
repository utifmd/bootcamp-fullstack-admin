const { User, AuthRequest, AuthResponse, Message } = require("../models")
class Controller {
    static async read(req, resp) {
        try {
            const { email, password } = req.body
            console.log(`account: ${email} ${password}`)
            const data = await User.findOne({ where: {email, password} })
            const response = data 
                ? new AuthResponse("got generated token") 
                : new Message({message:`Invalid username or password`})

            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async create(req, resp) {
        try {
            console.log("user create")
            const request = new AuthRequest(req.body)
            const data = await User.create(request)
            const response = new AuthResponse("got generated token")
            resp.send(response)
        } catch (error) {
            resp.send(new Message(error))
        }
    }
    static async update(req, resp) {
        try {
            const { id } = req.params
            const request = new AuthRequest(req.body)
            console.log(`user update ${req.params.id}`)
            const [state] = await User.update(request, { where: { id }})
            let text = state === 1 
                ? `User with id ${id} has been changed` 
                : { message: `Couldn\'t change user with id ${id}` }
            resp.send(new Message(text))
            
        } catch (error) {
            resp.send(new Message(error))
        }
    }
}
module.exports = Controller