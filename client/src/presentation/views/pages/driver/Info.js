import { useState } from "react"
import { NavBar } from "../../components"

import InfoTable from "./InfoTable"
import InfoListView from "./InfoListView"

const Info = () => {
    const [user] = useState({
        "id": 2,
        "name": "Brad pitt",
        "role": "driver",
        "identityNumber": 1002,
        "telp": "+62 852-7286-9009",
        "email": "bradpitt@gmail.com",
        "password": "121212",
        "imageUrl": "https://via.placeholder.com/150",
        "createdAt": "2022-12-26 11:22:17.87+00",
        "updatedAt": null,
        "histories": [
            {
                "id": 1,
                "fuel": 300000,
                "income": 1300000,
                "vehicleId": 1,
                "userId": 2,
                "createdAt": "2022-12-26 10:22:17.87+00",
                "updatedAt": "2022-12-26 23:22:17.87+00"
            }
        ]
    })
    return (<div className="bg-light">
        <NavBar active={'drivers'} />
        <div className="container">
            <div className="lead mt-5">Driver information</div>
            <div class="row justify-content-evenly align-items-center my-3">
                <div class="col-md-3">
                    <img src={user.imageUrl} width="100%" class="img-thumbnail" alt="user" />
                </div>
                <div class="col-md-6">
                    <InfoListView user={user} />
                    <div className="row pt-4 px-5">
                        <div className="col"><a class="btn btn-outline-danger btn-rounded w-100" href="#top" role="button" data-ripple-color="dark">Remove user</a></div>
                        <div className="col"><a class="btn btn-outline-dark btn-rounded w-100" href="#top" role="button" data-ripple-color="dark">Change info</a></div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <span className="lead">Driver records</span>
                <InfoTable user={user} />
            </div>
        </div>
    </div>)
}
export default Info