import { asDateFormat } from "../../helper"

const InfoListView = ({ vehicle }) => <ul className="list-group list-group-light">
    <li className="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div className="fw-bold">Name</div>
            <div className="text-muted"><i className="fas fa-edit fs"></i> {vehicle.name} ({vehicle.vendor})</div>
        </div>
        <span className={`badge ms-2 rounded-pill ${vehicle.status ? "badge-danger" : "badge-success"}`}>Status {vehicle.status ? "onboarding" : "standby"}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div className="fw-bold">Route</div>
            <div className="text-muted"><i className="fas fa-road fs"></i> {vehicle.route}</div>
        </div>
        {/* <span className="badge rounded-pill badge-success">Active</span> */}
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div className="fw-bold">Police number</div>
            <div className="text-muted"><i className="fas fa-key fs"></i> {vehicle.policeNumber}</div>
        </div>
        <span className="badge rounded-pill badge-success">Active from {asDateFormat(vehicle.createdAt)}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center px-5">
        <div>
            <div className="fw-bold">Passenger Capacity</div>
            <div className="text-muted"><i className="fas fa-edit fs"></i> {vehicle.passengerCapacity}</div>
        </div>
    </li>
</ul>
export default InfoListView