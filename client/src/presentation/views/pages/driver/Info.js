import { useState } from "react"
import { NavBar } from "../../partials"

const Info = () => {
    const [user, setUser] = useState({
        "id": 2,
        "name": "Brad pitt",
        "role": "driver",
        "identityNumber": 1002,
        "telp": "+62 852-7286-9009",
        "email": "bradpitt@gmail.com",
        "password": "121212",
        "imageUrl": "https://via.placeholder.com/150",
        "createdAt": "2022-12-26 11:22:17.87+00",
        "updatedAt": null
    })
    return (<div className="bg-light">
        <NavBar />
        <div className="container">
            <div class="row justify-content-evenly align-items-center py-5">
                <div class="col-md-3">
                    <img src={user.imageUrl} width="100%" class="img-thumbnail" alt="user" />
                </div>
                <div class="col-md-6">
                    <ul class="list-group list-group-light">
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">
                                    Full name
                                </div>
                                <div class="text-muted"><i className="fas fa-edit fs"></i> {user.name}</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-success">Active</span> */}
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Identity number</div>
                                <div class="text-muted"><i className="fas fa-key fs"></i> {user.identityNumber}</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-success">Active</span> */}
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Role</div>
                                <div class="text-muted"><i className="fas fa-crown fs"></i> {user.role}</div>
                            </div>
                            <span class="badge rounded-pill badge-success">Since {user.createdAt}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Phone number</div>
                                <div class="text-muted"><i className="fas fa-edit fs"></i> {user.telp}</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-warning">Awaiting</span> */}
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-5">
                            <div>
                                <div class="fw-bold">Email address</div>
                                <div class="text-muted"><i className="fas fa-inbox fs"></i> {user.email}</div>
                            </div>
                            {/* <span class="badge rounded-pill badge-warning">Awaiting</span> */}
                        </li>
                    </ul>
                    <div className="row pt-4 px-5">
                        <div className="col"><a class="btn btn-outline-danger btn-rounded w-100" href="#" role="button" data-ripple-color="dark">Remove user</a></div>
                        <div className="col"><a class="btn btn-outline-dark btn-rounded w-100" href="#" role="button" data-ripple-color="dark">Change info</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Info