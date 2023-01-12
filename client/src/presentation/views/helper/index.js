const asPhoneFormat = (num) => {
    let str = num?.toString() || num
    let cleaned = ('' + str).replace(/\D/g, '');

    let match = cleaned.match(/^(\d{2})(\d{3})(\d{4})(\d{4})$/);

    if (match) {
        return '+' + match[1] + '-' + match[2] + '-' + match[3] + '-' + match[4]
    }
    return str
}
const asDateFormat = (str) => {
    try {
        const simpleDate = new Date(str)
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let i = simpleDate.getMonth() - 1
        return `${simpleDate.getDay()} ${months[i]} ${simpleDate.getFullYear()}`
    } catch (error) {
        return str
    }
}
const asDateTimeFormat = (str) => {
    try {
        const simpleDate = new Date(str)
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let i = simpleDate.getMonth() - 1
        return `${simpleDate.getDay()} ${months[i]} ${simpleDate.getFullYear()}, ${simpleDate.getHours()}:${simpleDate.getMinutes()}`
    } catch (error) {
        console.log(error)
        return str
    }
}
const asCapitalize = (str) => str
    ?. charAt(0)
    ?. toUpperCase()
    ?. concat(str.slice(1)) 
    || str
const asIdr = (num) => "IDR ".concat(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")) || num

const backgroundStyle = {
    minHeight: "100vh",
    background: `linear-gradient(45deg, hsla(0, 0%, 95%, 0.5), hsla(0, 0%, 100%, 0.9) 100%), url('./assets/sustainable-lifestyle.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const changerValidations = ({ currentPassword, password, confirmPassword }) => {
    let error = {}
    if (!currentPassword) error.currentPassword = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."
    if (!confirmPassword) error.confirmPassword = "Confirm password could not be empty."
    if (confirmPassword !== password) error.confirmPassword = "Passwords does not match."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const signUpValidations = ({ email, password, confirmPassword }) => {
    let error = {}
    if (!email) error.email = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."
    if (!confirmPassword) error.confirmPassword = "Confirm password could not be empty."
    if (confirmPassword !== password) error.confirmPassword = "Passwords does not match."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const signInValidations = ({ email, password }) => {
    let error = {}
    if (!email) error.email = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const driverValidations = ({ name, telp, identityNumber, image }) => {
    let error = {}
    if (!name) error.name = "Name must not empty."
    if (!telp) error.telp = "Telp must not empty."
    if (!identityNumber) error.identityNumber = "Identity number number must not empty."
    if (!image) error.image = "Image must not empty."
    return {
        error, isValid: !Object.entries(error).length
    }
}
const vehicleValidations = ({ name, route, policeNumber, vendor, passengerCapacity, image }) => {
    let error = {}
    if (!name) error.name = "Name must not empty."
    if (!route) error.route = "Route must not empty."
    if (!policeNumber) error.policeNumber = "Police number must not empty."
    if (!vendor) error.vendor = "Vendor must not empty."
    if (!passengerCapacity) error.passengerCapacity = "Passenger capacity must not empty."

    return {
        error, isValid: !Object.entries(error).length
    }
}
export {
    asPhoneFormat, asDateFormat, asDateTimeFormat, asCapitalize, asIdr, backgroundStyle, 
    signInValidations, signUpValidations, driverValidations, changerValidations, vehicleValidations
}