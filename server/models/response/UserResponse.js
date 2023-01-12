const HistoryResponse = require("./HistoryResponse")

class UserResponse {
    constructor({id, name, role, identityNumber, telp, email, imageUrl, Histories, createdAt, updatedAt}){
        this.id = id
        this.name = name
        this.role = role
        this.identityNumber = identityNumber
        this.telp = telp
        this.email = email
        this.imageUrl = imageUrl
        if (Histories) this.histories = Histories.map(history => new HistoryResponse(history))
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static asList(response) {
        return response
            .map(user => new UserResponse(user))
    }
}
module.exports = UserResponse