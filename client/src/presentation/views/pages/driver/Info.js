import { useLoaderData, Link } from "react-router-dom"
import InfoTable from "./InfoTable"
import InfoListView from "./InfoListView"
import { getAccountInfo } from "../../../../domain"

const Info = () => {
    const { driver, error } = useLoaderData()
    const { account } = getAccountInfo()

    return (<div className="bg-light">
        <div className="container">
            <div className="lead mt-5">Driver information</div>
            {error &&
                <div class="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}
                
            {driver && <div class="row justify-content-evenly align-items-center my-3">
                <div class="col-md-3">
                    <img src={driver.imageUrl} width="100%" class="img-thumbnail" alt="driver" />
                </div>
                <div class="col-md-6">
                    <InfoListView user={driver} />
                    {account.role === "admin"
                        ? <div className="row pt-4 px-5">
                            <div className="col">
                                <Link
                                    class="btn btn-outline-danger btn-rounded w-100"
                                    to={``}
                                    role="button"
                                    data-ripple-color="dark">Remove driver</Link></div>
                            <div className="col">
                                <Link
                                    class="btn btn-outline-dark btn-rounded w-100"
                                    to={`../edit/${driver.id}`}
                                    role="button"
                                    data-ripple-color="dark">
                                    Change info
                                </Link>
                            </div>
                        </div> : null}
                </div>
            </div>}
            <div className="container my-5">
                <span className="lead">Driver records</span>
                <InfoTable driver={driver} />
            </div>
        </div>
    </div>)
}
export default Info