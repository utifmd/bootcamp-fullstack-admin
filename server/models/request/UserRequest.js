class UserRequest {
    constructor({name, role, identityNumber, telp, email, imageUrl}){
        this.name = name
        this.role = role
        this.identityNumber = identityNumber
        this.telp = telp
        this.email = email
        this.imageUrl = imageUrl
    }
}
module.exports = UserRequest