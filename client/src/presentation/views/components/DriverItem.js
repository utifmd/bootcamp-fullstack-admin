import { Link } from "react-router-dom"
import { asPhoneFormat, asDateFormat } from "../helper"
const DriverItem = ({driver}) => <>
    <div className="col">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static bg-light">
                <strong className="d-inline-block mb-2 text-primary">{driver.role.toUpperCase()}</strong>
                <h3 className="mb-0">{driver.name}</h3>
                <div className="mb-1 text-muted">Since {asDateFormat(driver.createdAt)}</div>
                <p className="card-text mb-auto">{asPhoneFormat(driver.telp)}</p>
                <Link to={`../info/${driver.id}`} className="stretched-link mt-3">Detail info</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img h-100" src={driver.imageUrl} role="img" />
            </div>
        </div>
    </div>
</>
export default DriverItem