import { Link } from "react-router-dom"
import { asPhoneFormat, asDateFormat } from "../../helper"
const DriverItem = ({ driver }) => <>
    {driver
        ? <div className="container">
            <div className="row align-items-center m-4">
                <div className="col">
                    <img
                        className="row mx-auto d-block border border-1 rounded-circle"
                        src={driver.imageUrl}
                        style={{ width: `125px`, height: `125px`, objectFit: `contain` }}
                        role="img" />
                </div>
                <div className="col">
                    <strong className="d-inline-block mb-2 text-primary">{driver.role.toUpperCase()}</strong>
                    <h3 className="mb-0">{driver.name}</h3>
                    <div className="mb-1 text-muted">Since {asDateFormat(driver.createdAt)}</div>
                    <p className="card-text mb-auto">{asPhoneFormat(driver.telp)}</p>
                    <div className="pt-3"><Link to={`../info/${driver.id}`}>Detail info</Link></div>
                </div>
            </div>
        </div>
        : null}
</>
export default DriverItem