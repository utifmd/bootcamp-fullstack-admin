import { asPhoneFormat, asDateFormat } from "../helper"
const DriverItem = ({user}) => <>
    <div className="col">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static bg-light">
                <strong className="d-inline-block mb-2 text-primary">{user.role.toUpperCase()}</strong>
                <h3 className="mb-0">{user.name}</h3>
                <div className="mb-1 text-muted">Since {asDateFormat(user.createdAt)}</div>
                <p className="card-text mb-auto">{asPhoneFormat(user.telp)}</p>
                <a href="#" className="stretched-link">Detail info</a>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img h-100" src={user.imageUrl} role="img" />
            </div>
        </div>
    </div>
</>
export default DriverItem