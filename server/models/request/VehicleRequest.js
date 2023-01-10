class VehicleRequest {
    constructor(name, status, route, passengerCapacity, policeNumber, vendor, imageUrl, userId) {    
        this.name = name
        this.status = status
        this.route = route
        this.passengerCapacity = passengerCapacity
        this.policeNumber = policeNumber
        this.vendor = vendor
        this.imageUrl = imageUrl
        this.userId = userId
    }
}
module.exports = VehicleRequest