import axios from "axios"

class Service {
    static config = { 
        baseURL: "http://127.0.0.1:5000/" 
    }
    static authSignIn = (fields) => axios.post(
        "auth/signin/", fields, this.config
    )
    static authSignUp = (fields) => axios.post(
        "auth/regiter/", fields, this.config
    )
    static authChangePassword = () => axios.get(
        `auth/change/`, this.config
    )
    static getAuth = () => axios.get(
        `auth/`, this.config
    )
    static putAuth = (fields) => axios.put(
        `auth/edit`, fields, this.config
    )

    static getFeeds = () => axios.get(
        "histories/", this.config
    )
    static addFeeds = () => axios.get(
        "histories/add", this.config
    )
    static putFeeds = (id) => axios.get(
        `histories/update/${id}`, this.config
    )
    
    static getVehicles = () => axios.get(
        "vehicles", this.config
    )
    static getVehicle = (id) => axios.get(
        `vehicles/${id}`, this.config
    )
    static searchVehicles = (query) => axios.get(
        `vehicles/search/${query}`, this.config
    )
    static postVehicle = (fields) => axios.put(
        `vehicles/add`, fields, this.config
    )
    static putVehicle = (id, fields) => axios.put(
        `vehicles/update/${id}`, fields, this.config
    )
    static deleteVehicle = (id) => axios.get(
        `vehicles/remove/${id}`, this.config
    )

    static getDrivers = () => axios.get(
        "users/", this.config
    )
    static searchDrivers = (query) => axios.get(
        `users/search/${query}`, this.config
    )
    static getDriver = (id) => axios.get(
        `users/${id}`, this.config
    )
    static putDriver = (id, fields) => axios.put(
        `users/update/${id}`, fields, this.config
    )
    static deleteDriver = (id) => axios.get(
        `users/remove/${id}`, this.config
    )
}
export default Service