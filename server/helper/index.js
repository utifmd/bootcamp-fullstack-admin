const { hashSync, compareSync } = require("bcrypt")
const { sign, verify } = require("jsonwebtoken")

let saltRound = +process.env.SALT_ROUND || 7
let secretKey = +process.env.SECRET_KEY || "nusantara"

const encrypt = (input) => {
    const crypted = hashSync(input, saltRound)
    return crypted
}
const isEncryptionMatches = (input, encrypted) => {
    const decrypted = compareSync(input, encrypted)
    return decrypted
}
const tokenGenerator = (input) => {
    return sign(input, secretKey)
}
const tokenNeutralizer = (input) => {
    return verify(input, secretKey)
}
module.exports = {
    encrypt, isEncryptionMatches, tokenGenerator, tokenNeutralizer
}