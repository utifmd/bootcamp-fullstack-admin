import { useState } from "react"
import { NavBar } from "../../partials"

const Info = () => {
    const [vehicle] = useState({
        "id": 1,
        "name": "Angkot B01",
        "status": null,
        "route": "Kebayoran lama - Ciledug",
        "passengerCapacity": 6,
        "policeNumber": "B 1001 BA",
        "vendor": "Toyota",
        "imageUrl": "https://via.placeholder.com/150",
        "userId": 2,
        "createdAt": "2022-12-26 11:22:17.87+00",
        "updatedAt": null
    })
    return (<div className="bg-light">
        <NavBar />
        <div className="container">
            <div class="row justify-content-evenly align-items-center py-5">
                <div class="col-md-3">
                    <img src={vehicle.imageUrl} width="100%" class="img-thumbnail" alt="user" />
                </div>
                <div class="col-md-6">
                    <ul class="list-group list-group-light">
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">
                                    Name
                                </div>
                                <div class="text-muted"><i className="fas fa-edit fs"></i> {vehicle.name} ({vehicle.vendor})</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-success">Active</span> */}
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Route</div>
                                <div class="text-muted"><i className="fas fa-road fs"></i> {vehicle.route}</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-success">Active</span> */}
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Police number</div>
                                <div class="text-muted"><i className="fas fa-key fs"></i> {vehicle.policeNumber}</div>
                            </div>
                            <span class="badge rounded-pill badge-success">Active {vehicle.createdAt}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Passenger Capacity</div>
                                <div class="text-muted"><i className="fas fa-edit fs"></i> {vehicle.passengerCapacity}</div>
                            </div>
                            <span class={`badge rounded-pill ${vehicle.status ? "badge-info" : "badge-success"}`}>{vehicle.status ? "Onboarding" : "Standby"}</span>
                        </li>
                    </ul>
                    <div className="row pt-4 px-5">
                        <div className="col"><a class="btn btn-outline-danger btn-rounded w-100" href="#" role="button" data-ripple-color="dark">Remove vehicle</a></div>
                        <div className="col"><a class="btn btn-outline-dark btn-rounded w-100" href="#" role="button" data-ripple-color="dark">Change info</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Info
