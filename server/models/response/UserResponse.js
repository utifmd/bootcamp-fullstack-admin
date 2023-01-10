class UserResponse {
    constructor(id, name, role, identityNumber, telp, imageUrl, createdAt, updatedAt){
        this.id = id
        this.name = name
        this.role = role
        this.identityNumber = identityNumber
        this.telp = telp
        this.imageUrl = imageUrl
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
module.exports = UserResponse