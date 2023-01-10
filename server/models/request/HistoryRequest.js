class HistoryRequest {
    constructor({fuel, income, vehicleId, userId}) {
        this.fuel = fuel
        this.income = income
        this.VehicleId = vehicleId
        this.UserId = userId
    }
}
module.exports = HistoryRequest