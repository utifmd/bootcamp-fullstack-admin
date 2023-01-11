import { useLoaderData, Link } from "react-router-dom"
import InfoTable from "./InfoTable"
import InfoListView from "./InfoListView"

const Info = () => {
    const driver = useLoaderData()

    return (<div className="bg-light">
        <div className="container">
            <div className="lead mt-5">Driver information</div>
            <div class="row justify-content-evenly align-items-center my-3">
                <div class="col-md-3">
                    <img src={driver.imageUrl} width="100%" class="img-thumbnail" alt="driver" />
                </div>
                <div class="col-md-6">
                    <InfoListView user={driver} />
                    <div className="row pt-4 px-5">
                        <div className="col"><Link class="btn btn-outline-danger btn-rounded w-100"
                            to={``} role="button" data-ripple-color="dark">Remove driver</Link></div>
                        <div className="col">
                            <Link
                                class="btn btn-outline-dark btn-rounded w-100"
                                to={`../edit/${driver.id}`}
                                role="button"
                                data-ripple-color="dark">
                                Change info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <span className="lead">Driver records</span>
                <InfoTable driver={driver} />
            </div>
        </div>
    </div>)
}
export default Info