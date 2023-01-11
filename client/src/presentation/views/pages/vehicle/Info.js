import { useLoaderData } from "react-router-dom"

import InfoListVIew from "./InfoListView"
import InfoTable from "./InfoTable"

const Info = () => {
    const vehicle = useLoaderData()

    return (<div className="bg-light">
        {/* <NavBar active={'vehicles'} /> */}
        <div className="container">
            <div className="lead mt-5">Vehicle information</div>
            <div className="row justify-content-evenly align-items-center my-3">
                <div className="col-md-3">
                    <img src={vehicle?.imageUrl} width="100%" className="img-thumbnail" alt="user" />
                </div>
                <div className="col-md-7">
                    <InfoListVIew vehicle={vehicle} />
                    <div className="row pt-4 px-5">
                        <div className="col"><a 
                            className="btn btn-outline-danger btn-rounded w-100" 
                            href="#top" 
                            // role="button" 
                            data-ripple-color="dark">Remove vehicle</a></div>
                            
                        <div className="col"><a 
                            className="btn btn-outline-dark btn-rounded w-100" 
                            href="#top" 
                            // role="button" 
                            data-ripple-color="dark">Change info</a></div>

                        <div className="col">
                            <button 
                                disabled={vehicle?.status === null} 
                                onClick={null} 
                                className="btn btn-outline-warning btn-rounded w-100" 
                                // role="button" 
                                data-ripple-color="dark">Reset status
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <span className="lead">Vehicle boarding records</span>
                <InfoTable vehicle={vehicle}/>
            </div>
        </div>
    </div>)
}
export default Info
