import axios from "axios"

class Service {
    static instance = (token, contentType) => axios.create({
        baseURL: "http://127.0.0.1:5000/",
        headers: token ? {
            "Content-Type": contentType || `application/json`,
            "access_token": token
        } : {
            "Content-Type": `application/json`
        }
    })

    static authSignIn = (fields) => this.instance()
        .post("auth/signin/", fields)

    static authSignUp = (fields) => this.instance()
        .post("auth/register/", fields)

    static authChangePassword = () => this.instance()
        .get(`auth/change/`)

    static getAuth = (token) => this.instance(token)
        .get(`auth/`)

    static putAuth = (token, fields) => 
        this.instance(token, fields?.image)
        .put(`auth/edit`, fields)


    static getFeeds = () => this.instance()
        .get("histories/")

    static addFeeds = () => this.instance()
        .get("histories/add")

    static putFeeds = (id) => this.instance()
        .get(`histories/update/${id}`)


    static getVehicles = () => this.instance()
        .get("vehicles")

    static getVehicle = (id) => this.instance()
        .get(`vehicles/${id}`)

    static searchVehicles = (query) => this.instance()
        .get(`vehicles/search/${query}`)

    static postVehicle = (token, fields, contentType) => this.instance(token, contentType)
        .post(`vehicles/add`, fields)

    static putVehicle = (token, id, fields, contentType) => this.instance(token, contentType)
        .put(`vehicles/update/${id}`, fields)

    static putVehicleStatus = (token, id, fields) => this.instance(token)
        .put(`vehicles/update/${id}`, fields)

    static deleteVehicle = (id) => this.instance()
        .delete(`vehicles/remove/${id}`)


    static getDrivers = () => this.instance()
        .get("users/")

    static searchDrivers = (query) => this.instance()
        .get(`users/search/${query}`)

    static getDriver = (id) => this.instance()
        .get(`users/${id}`)

    static putDriver = (token, id, fields, contentType) => this.instance(token, contentType)
        .put(`users/update/${id}`, fields)

    static deleteDriver = (id) => this.instance()
        .get(`users/remove/${id}`)

}
export default Service