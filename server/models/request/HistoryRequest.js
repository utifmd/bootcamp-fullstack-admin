class HistoryRequest {
    constructor({fuel, income, vehicleId, userId}) {
        this.fuel = fuel
        this.income = income
        this.vehicleId = vehicleId
        this.userId = userId
    }
}
module.exports = HistoryRequest