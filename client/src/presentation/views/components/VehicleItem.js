import { useAuth } from "../../state"
import { asDateTimeFormat } from "../helper"

const Item = ({ vehicle }) => {
    const { auth } = useAuth()
    return (<div className="col">
        <div className="card text-center">
            <div className="card-header">{vehicle.policeNumber}</div>
            <img src={vehicle.imageUrl} className="img-fluid" alt={vehicle.name} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{vehicle.route}</p>
                <button disabled={!auth.token} className="btn btn-primary">Drive</button>
            </div>
            <div className="card-footer text-muted">Last used at {asDateTimeFormat(vehicle.updatedAt)}</div>
        </div>
    </div>/*  */)
}
export default Item