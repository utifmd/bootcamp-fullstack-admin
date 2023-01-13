import { Link, useLoaderData } from "react-router-dom"
import { asDateTimeFormat, asCapitalize } from "../../helper"
const Item = ({ i, history, account }) => {
    return (
        <tr>
            {i % 2 === 0 && <td></td>}
            <td className={`${i % 2 === 0 ? 'border-start' : 'border-end'} border-5 px-3 pt-3`}>
                <div className="card">
                    {account
                        ?.role === "admin"
                        ? <Link to={`edit/${history?.id}/${history?.vehicle?.id}/${history?.user?.id}`} className="card-header">{history?.vehicle?.policeNumber}</Link>
                        : <div className="card-header">{history?.vehicle?.policeNumber}</div>}

                    <div className="card-body">
                        {i % 2 === 0
                            ? <div className="row">
                                <div className="col-md-2 px-4">
                                    <img
                                        src={history?.vehicle?.imageUrl}
                                        style={{height: `50px`, width: `50px`, objectFit: `cover`}}
                                        className="row mx-auto d-block border border-3 rounded-circle"
                                        alt="driver" />
                                    <div className="m-2" />
                                    <img
                                        src={history?.user?.imageUrl}
                                        style={{height: `50px`, width: `50px`, objectFit: `cover`}}
                                        className="row mx-auto d-block border border-3 rounded-circle"
                                        alt="driver" />
                                </div>
                                <blockquote className="col">
                                    <p>{asCapitalize(history?.user?.role)} {history?.user?.name} sedang kejar setoran dengan {history?.vehicle?.name} rute {history?.vehicle?.route}</p>
                                    <small className={history.income ? `text-secondary`: `text-primary`}>{history.income ? "Finished" : "Progress"}, {asDateTimeFormat(history.createdAt)}</small>
                                </blockquote>
                            </div>
                            : <div className="row">
                                <blockquote className="col">
                                    <p>{asCapitalize(history?.user?.role)} {history?.user?.name} sedang kejar setoran dengan {history?.vehicle?.name} rute {history?.vehicle?.route}</p>
                                    <small className={history.income ? `text-secondary`: `text-primary`}>{history.income ? "Finished" : "Progress"}, {asDateTimeFormat(history.createdAt)}</small>
                                </blockquote>
                                <div className="col-md-2 px-4">
                                    <img
                                        src={history?.vehicle?.imageUrl}
                                        style={{height: `50px`, width: `50px`, objectFit: `cover`}}
                                        className="row mx-auto d-block border border-3 rounded-circle"
                                        alt="driver" />
                                    <div className="m-2" />
                                    <img
                                        src={history?.user?.imageUrl}
                                        style={{height: `50px`, width: `50px`, objectFit: `cover`}}
                                        className="row mx-auto d-block border border-3 rounded-circle"
                                        alt="driver" />
                                </div>
                            </div>}
                    </div>
                </div>
            </td>
            {i % 2 !== 0 && <td></td>}
        </tr>
    )
}
export default Item