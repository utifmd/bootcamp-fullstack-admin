class HistoryResponse {
    constructor({id, fuel, income, vehicleId, userId, createdAt, updatedAt}) {
        this.id = id
        this.fuel = fuel
        this.income = income
        this.vehicleId = vehicleId
        this.userId = userId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static asList(response) {
        return response
            .map(history => new HistoryResponse(history))
    }
}
module.exports = HistoryResponse