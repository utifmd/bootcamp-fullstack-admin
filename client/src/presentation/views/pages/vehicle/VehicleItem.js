import { Form, Link, useActionData, useNavigation } from "react-router-dom"
import { asDateTimeFormat } from "../../helper"
import { getAccountInfo } from "../../../../domain"

const Item = ({ vehicle }) => {
    const { account } = getAccountInfo()
    const { error } = useActionData() || {}
    const navigation = useNavigation()
    
    return (<div className="col">
        <div className="card text-center">
            <div className="card-header">{vehicle.policeNumber}</div>
            <img src={vehicle.imageUrl} className="img-fluid" alt={vehicle.name} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">{vehicle.route}</p>
                <div className="d-flex gap-2">
                    {account
                        ?.role === "driver"
                        ? <Form method="put">
                            <input type="hidden" name="id" value={vehicle.id} />
                            <input type="hidden" name="status" value="onboarding" />
                            <button type="submit"
                                disabled={
                                    navigation.state === "loading" ||
                                    navigation.state === "submitting" ||
                                    vehicle.status !== "standby"
                                }
                                className={`btn ${vehicle.status === "standby" ? 'btn-primary' : 'btn-danger'}`}>
                                {vehicle.status === "standby" ? `Take` : `Taken`}
                            </button>
                        </Form>
                        : null
                    }
                    <Link to={`../info/${vehicle.id}`} className="btn btn-info">preview</Link>
                </div>
                {error
                    ?.message
                    ?.length
                    ? <small class="text-danger my-2" role="alert">{error.message}</small>
                    : null}
            </div>
            <div className="card-footer text-muted">Last used at {asDateTimeFormat(vehicle.updatedAt)}</div>
        </div>
    </div>)
}
export default Item