import axios from "axios"

class Service {
    static instance = (token, contentType) => axios.create({ 
        baseURL: process.env.REACT_APP_BASE_URL || `https://bootcamp-fullstack-admin-production.up.railway.app/`,
        headers: token ? {
            "Content-Type": contentType || `application/json`,
            "access_token": token,
        } : {
            "Content-Type": `application/json`,
        }
    })
    
    static authSignIn = (fields) => this.instance()
        .post("auth/signin/", fields)

    static authSignUp = (fields) => this.instance()
        .post("auth/register/", fields)

    static authChangePassword = (token, fields) => this.instance(token)
        .put(`auth/change/`, fields)

    static getAuth = (token) => this.instance(token)
        .get(`auth/`)

    static putAuth = (token, fields, contentType) => this
        .instance(token, contentType)
        .put(`auth/edit`, fields)


    static getFeeds = () => this.instance()
        .get("histories/")
        
    static getRangedFeeds = (startDate, endDate) => this.instance()
        .get(`histories/range/${startDate}/${endDate}`)

    static postFeeds = (token, fields) => this
        .instance(token)
        .post("histories/add", fields)

    static putFeeds = (token, fields) => this.instance(token)
        .put(`histories/update/${fields.id}/${fields.targetUserId}`, fields)


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

    static deleteVehicle = (token, id) => this.instance(token)
        .delete(`vehicles/remove/${id}`)


    static getDrivers = () => this.instance()
        .get("users/")

    static searchDrivers = (query) => this.instance()
        .get(`users/search/${query}`)

    static getDriver = (token, id) => this.instance(token)
        .get(`users/${id}`)

    static putDriver = (token, id, fields, contentType) => this.instance(token, contentType)
        .put(`users/update/${id}`, fields)

    static deleteDriver = (token, id) => this.instance(token)
        .delete(`users/remove/${id}`)


    static checkSpaceStories = (token) => this
        .instance(token)
        .get("stories/checkSpace")

    static postStory = (token, fields) => this
        .instance(token)
        .post("stories/add", fields)

    static destroyStories = (token) => this
        .instance(token)
        .delete("stories/destroy")

    static removeStory = (token, id) => this
        .instance(token)
        .delete(`stories/remove/${id}`)

}
export default Service