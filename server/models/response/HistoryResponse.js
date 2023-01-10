class HistoryResponse {
    constructor({id, fuel, income, vehicleId, userId, Vehicle, User, createdAt, updatedAt}) {
        this.id = id
        this.fuel = fuel
        this.income = income
        this.vehicleId = vehicleId
        this.userId = userId
        this.vehicle = Vehicle
        this.user = this.asUser(User)
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    asUser({id, name, role, identityNumber, telp, imageUrl}){
        return {
            id: id,
            name: name,
            role: role,
            identityNumber: identityNumber,
            telp: telp,
            imageUrl: imageUrl
        }
    }
    static asList(response) {
        return response
            .map(history => new HistoryResponse(history))
    }
}
module.exports = HistoryResponse