import { Link, useLoaderData } from "react-router-dom"
import { getAccountInfo } from "../../../../domain"

import InfoListVIew from "./InfoListView"
import InfoTable from "./InfoTable"

const Info = () => {
    const {vehicle, error} = useLoaderData()
    const { account } = getAccountInfo()

    return (<div className="bg-light">
        <div className="container">
            <div className="lead mt-5">Vehicle information</div>
            {error &&
                <div class="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}
                
            {vehicle && <div className="row justify-content-evenly align-items-center my-3">
                <div className="col-md-3">
                    <img src={vehicle?.imageUrl} width="100%" className="img-thumbnail" alt="user" />
                </div>
                <div className="col-md-7">
                    <InfoListVIew vehicle={vehicle} />
                    {account
                        ?.role === "admin"
                        ? <div className="row pt-4 px-5">
                            <div className="col"><Link
                                className="btn btn-outline-danger btn-rounded w-100"
                                to={`../remove/${vehicle?.id}`}
                                data-ripple-color="dark">Remove vehicle</Link></div>

                            <div className="col"><Link
                                className="btn btn-outline-dark btn-rounded w-100"
                                to={`../edit/${vehicle?.id}`}
                                data-ripple-color="dark">Change info</Link></div>

                            <div className="col">
                                <button
                                    disabled={vehicle?.status === null}
                                    onClick={null}
                                    className="btn btn-outline-warning btn-rounded w-100"
                                    data-ripple-color="dark">Reset status
                                </button>
                            </div>
                        </div> : null
                    }
                </div>
            </div>}
            <div className="container my-5">
                <span className="lead">Vehicle boarding records</span>
                <InfoTable vehicle={vehicle} />
            </div>
        </div>
    </div>)
}
export default Info
