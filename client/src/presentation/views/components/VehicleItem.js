import { asDateTimeFormat } from "../helper"
const Item = ({vehicle}) => <div className="col">
    <div className="card text-center">
        <div className="card-header">{vehicle.policeNumber}</div>
        <img src={vehicle.imageUrl} className="img-fluid" alt={vehicle.name} />
        <div className="card-body">
            <h5 className="card-title">{vehicle.name}</h5>
            <p className="card-text">{vehicle.route}</p>
            <a href="#" className="btn btn-primary">Drive</a>
        </div>
        <div className="card-footer text-muted">Last used at {asDateTimeFormat(vehicle.updatedAt)}</div>
    </div>
</div>
export default Item