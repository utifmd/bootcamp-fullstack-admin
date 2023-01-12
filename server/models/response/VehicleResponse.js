const HistoryResponse = require("./HistoryResponse")

class VehicleResponse {
    constructor({id, name, status, route, passengerCapacity, policeNumber, vendor, imageUrl, userId, Stories, Histories, createdAt, updatedAt}) {
        this.id = id
        this.name = name
        this.status = status
        this.route = route
        this.passengerCapacity = passengerCapacity
        this.policeNumber = policeNumber
        this.vendor = vendor
        this.imageUrl = imageUrl
        this.userId = userId
        if (Stories) this.stories = Stories
        if (Histories) this.histories = Histories.map(history => new HistoryResponse(history))
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static asList(response) {
        return response
            .map(vehicle => new VehicleResponse(vehicle))
    }
}
module.exports = VehicleResponse