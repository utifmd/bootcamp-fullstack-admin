class Message {
    constructor(payload){
        if (payload?.message) this.error = payload.message
        else this.message = payload
    }
}
module.exports = Message