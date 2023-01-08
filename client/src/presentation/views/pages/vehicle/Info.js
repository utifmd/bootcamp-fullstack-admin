import { useState } from "react"
import { NavBar } from "../../components"

import InfoListVIew from "./InfoListView"
import InfoTable from "./InfoTable"

const vehicle = {
    "id": 1,
    "name": "Angkot B01",
    "status": "null",
    "route": "Kebayoran lama - Ciledug",
    "passengerCapacity": 6,
    "policeNumber": "B 1001 BA",
    "vendor": "Toyota",
    "imageUrl": "https://via.placeholder.com/150",
    "userId": 2,
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
}
const Info = () => {
    const [form, setForm] = useState({ vehicle, error: {}, loading: false })

    return (<div className="bg-light">
        <NavBar />
        <div className="container">
            <div className="lead mt-5">Vehicle information</div>
            <div className="row justify-content-evenly align-items-center my-3">
                <div className="col-md-3">
                    <img src={form.vehicle.imageUrl} width="100%" className="img-thumbnail" alt="user" />
                </div>
                <div className="col-md-7">
                    <InfoListVIew vehicle={form.vehicle} />
                    <div className="row pt-4 px-5">
                        <div className="col"><a 
                            className="btn btn-outline-danger btn-rounded w-100" 
                            href="#top" 
                            // role="button" 
                            data-ripple-color="dark">Remove vehicle</a></div>
                            
                        <div className="col"><a 
                            className="btn btn-outline-dark btn-rounded w-100" 
                            href="#top" 
                            // role="button" 
                            data-ripple-color="dark">Change info</a></div>

                        <div className="col">
                            <button 
                                disabled={form.vehicle.status === null} 
                                onClick={() => setForm({vehicle: {...form.vehicle, status: null}}) } 
                                className="btn btn-outline-warning btn-rounded w-100" 
                                // role="button" 
                                data-ripple-color="dark">Reset status
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <span className="lead">Vehicle boarding records</span>
                <InfoTable vehicle={form.vehicle}/>
            </div>
        </div>
    </div>)
}
export default Info
