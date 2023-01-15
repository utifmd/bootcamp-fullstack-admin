import React from "react"
import { Form, useLoaderData, Link, useNavigation } from "react-router-dom"
import InfoTable from "./InfoTable"
import InfoListView from "./InfoListView"
import { getAccountInfo } from "../../../../domain"

const Info = () => {
    const { driver, error } = useLoaderData()
    const { account } = getAccountInfo()
    const navigation = useNavigation()

    return (
        <div className="bg-light">
            <div className="container">
                <div className="lead mt-5">Driver information</div>
                {error &&
                    <div className="alert alert-danger m-5" role="alert"> {error.message || error} </div>}

                {driver &&
                    <div className="row justify-content-evenly align-items-center mt-3 mb-5">
                        <div className="col-md-6 p-5">
                            <img src={driver.imageUrl} style={{ width: `100%`, height: `100%`, objectFit: `cover` }} className="img-thumbnail" alt="driver" />
                        </div>
                        <div className="col-md-6">
                            <InfoListView user={driver} />
                            {account.role === "admin"
                                ? <div className="row pt-4 px-5">
                                    <div className="col">
                                        <Form method="delete">
                                            <button type="submit"
                                                disabled={
                                                    navigation.state === 'loading' || 
                                                    navigation.state === 'submitting'}
                                                className="btn btn-outline-danger btn-rounded w-100"
                                                data-ripple-color="dark">Remove</button>
                                        </Form>
                                    </div>
                                    <div className="col">
                                        <Link
                                            className="btn btn-outline-dark btn-rounded w-100"
                                            to={`../edit/${driver.id}`}
                                            role="button"
                                            data-ripple-color="dark">
                                            Change
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Form method="put">
                                            <input type="hidden" name="role" value="driver" />
                                            <button type="submit"
                                                disabled={
                                                    navigation.state === 'loading' || 
                                                    navigation.state === 'submitting' ||
                                                    driver.role === 'driver'
                                                }
                                                className="btn btn-outline-warning btn-rounded w-100"
                                                data-ripple-color="dark">{driver.role === 'driver' ? 'Approved' : 'Approve'}</button>
                                        </Form>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>}
                {driver && driver.histories.length > 0
                    ? <div className="container my-5">
                        <span className="lead">Driver records</span>
                        <InfoTable driver={driver} />
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default Info