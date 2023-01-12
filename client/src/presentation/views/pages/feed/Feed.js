import { useLoaderData } from "react-router-dom"
import { asDateTimeFormat, asCapitalize } from "../../helper"

const Feed = () => {
    const { feeds, error } = useLoaderData()
    return (
        <div className="container">
            {error &&
                    <div class="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}
            <div className="row">
                <table>
                    {feeds?.map((history, i) => i % 2 === 0
                        ? <tr><td></td><td className="border-start border-5 py-5 px-2">
                            <div class="card">
                                <div class="card-header">{history.vehicle.policeNumber}</div>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-4"><img src={history.user.imageUrl} className="rounded-circle" alt="driver" /></div>
                                        <blockquote class="col-md-8 blockquote mb-0">
                                            <p>{asCapitalize(history.user.role)} {history.user.name} sedang kejar setoran dengan {history.vehicle.name} rute {history.vehicle.route}</p>
                                            <small className="text-info">{history.vehicle ? "Onboarding" : "Standby"} {asDateTimeFormat(history.createdAt)}</small>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </td></tr>
                        : <tr><td className="border-end border-5 py-5 px-2 text-end">
                            <div class="card">
                                <div class="card-header">{history.vehicle.policeNumber}</div>
                                <div class="card-body">
                                    <div className="row">
                                        <blockquote class="col-md-8 blockquote mb-0">
                                            <p>{asCapitalize(history.user.role)} {history.user.name} sedang kejar setoran dengan {history.vehicle.name} rute {history.vehicle.route}</p>
                                            <small className="text-info">{history.vehicle ? "Onboarding" : "Standby"} {asDateTimeFormat(history.createdAt)}</small>
                                        </blockquote>
                                        <div className="col-md-4"><img src={history.user.imageUrl} className="rounded-circle" alt="driver" /></div>
                                    </div>
                                </div>
                            </div>
                        </td><td></td></tr>
                    )}
                </table>
            </div>
        </div>
    )
}
export default Feed