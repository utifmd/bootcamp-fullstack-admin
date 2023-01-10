class HistoryResponse {
    constructor(id, fuel, income, vehicleId, userId, createdAt, updatedAt) {
        this.id = id
        this.fuel = fuel
        this.income = income
        this.vehicleId = vehicleId
        this.userId = userId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
module.exports = HistoryResponse