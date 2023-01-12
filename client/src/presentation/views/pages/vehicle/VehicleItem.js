import { useState } from "react"
import { Link } from "react-router-dom"
import { asDateTimeFormat } from "../../helper"

const Item = ({ vehicle }) => {
    const [status, setStatus] = useState(vehicle.status === "onboarding")
    const onTakeVehicle = (e) => {
        e.preventDefault()
        setStatus(!status)
    }
    return (<div className="col">
        <Link className="card text-center" to={`../info/${vehicle.id}`}>
            <div className="card-header">{vehicle.policeNumber}</div>
            <img src={vehicle.imageUrl} className="img-fluid" alt={vehicle.name} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{vehicle.route}</p>
                <button
                    disabled={status}
                    onClick={onTakeVehicle}
                    className="btn btn-primary">{status ? "taken" : "take"}
                </button>
            </div>
            <div className="card-footer text-muted">Last used at {asDateTimeFormat(vehicle.updatedAt)}</div>
        </Link>
    </div>)
}
export default Item