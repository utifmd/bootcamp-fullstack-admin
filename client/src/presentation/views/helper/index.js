const asPhoneFormat = (num) => {
    let str = num.toString()
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

export {
    asPhoneFormat, asDateFormat, asDateTimeFormat, asCapitalize, asIdr, backgroundStyle
}