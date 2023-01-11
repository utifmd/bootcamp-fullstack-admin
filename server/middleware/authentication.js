const { tokenNeutralizer } = require("../helper")
const { Message } = require("../models")

const authentication = (req, resp, next) => {
    try {
        const { access_token } = req.headers
        if(!access_token){
            resp.status(404).send(new Message({message: `unauthorized.`}))
            return
        }
        const userId = tokenNeutralizer(access_token)
        resp.locals.userId = userId
        next()
    } catch (error) {
        resp.status(400).send(new Message(error))
    }
}
module.exports = authentication