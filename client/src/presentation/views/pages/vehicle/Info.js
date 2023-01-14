import React from "react"
import { Form, Link, useLoaderData } from "react-router-dom"
import { getAccountInfo } from "../../../../domain"

import InfoListVIew from "./InfoListView"
import InfoTable from "./InfoTable"

const Info = () => {
    const { vehicle, error } = useLoaderData()
    const { account } = getAccountInfo()

    return (<div className="bg-light">
        <div className="container">
            <div className="lead mt-5">Vehicle information</div>
            {error &&
                <div class="alert alert-danger m-5" role="alert"> {error.message || error} </div>}

            {vehicle && <div className="row justify-content-evenly align-items-center my-3  mb-5">
                <div className="col-md-6 p-5">
                    <img src={vehicle.imageUrl} style={{ width: `100%`, height: `100%`, objectFit: `cover` }} className="img-thumbnail" alt="user" />
                </div>
                <div className="col-md-6">
                    <InfoListVIew vehicle={vehicle} />
                    {account && account.role === "admin"
                        ? <div className="row pt-4 px-5">
                            <div className="col">
                                <Form method="delete">
                                    <button type="submit"
                                        className="btn btn-outline-danger btn-rounded w-100"
                                        data-ripple-color="dark">Remove vehicle</button>
                                </Form>
                            </div>
                            <div className="col"><Link
                                className="btn btn-outline-dark btn-rounded w-100"
                                to={`../edit/${vehicle.id}`}
                                data-ripple-color="dark">Change info</Link></div>

                            {/* <div className="col">
                                <button
                                    disabled={vehicle?.status === null}
                                    onClick={null}
                                    className="btn btn-outline-warning btn-rounded w-100"
                                    data-ripple-color="dark">Reset
                                </button>
                            </div> */}
                        </div> : null
                    }
                </div>
            </div>}
            { vehicle && vehicle.histories
                ? <div className="container my-5">
                    <span className="lead">Vehicle boarding records</span>
                    <InfoTable vehicle={vehicle} />
                </div>
                : null
            }
        </div>
    </div>)
}
export default Info
