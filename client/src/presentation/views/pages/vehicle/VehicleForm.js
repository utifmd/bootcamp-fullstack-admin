import { Form, useActionData, useNavigation } from "react-router-dom"
const VehicleForm = ({ vehicle, isEdit, errorLoader }) => {
    const { error } = useActionData() || {}
    const navigation = useNavigation()
    return (<div className="container">
        <Form method={isEdit ? 'put' : 'post'} encType="multipart/form-data" className="p-4 p-md-5">
            <div className="lead mb-3">Please {isEdit ? "change vehicle info" : "add new vehicle"}</div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="floatingName"
                            placeholder="Vehicle name"
                            defaultValue={vehicle?.name} />
                        <label htmlFor="floatingName">Vehicle name</label>
                    </div>
                    {error
                        ?.name
                        ?.length
                        ? <small className="text-danger">* {error.name}</small>
                        : null}
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            name="route"
                            type="text"
                            className="form-control"
                            id="floatingRoute"
                            placeholder="Phone number"
                            defaultValue={vehicle?.route} />
                        <label htmlFor="floatingRoute">Route</label>
                    </div>
                    {error
                        ?.route
                        ?.length
                        ? <small className="text-danger">* {error.route}</small>
                        : null}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="form-floating">
                        <input
                            name="policeNumber"
                            type="text"
                            className="form-control"
                            id="floatingpoliceNumber"
                            placeholder="Plat nomor kendaraan"
                            defaultValue={vehicle?.policeNumber} />
                        <label htmlFor="floatingpoliceNumber">Plat nomor</label>
                    </div>
                    {error
                        ?.policeNumber
                        ?.length
                        ? <small className="text-danger">* {error.policeNumber}</small>
                        : null}
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input
                            name="vendor"
                            type="text"
                            className="form-control"
                            id="floatingvendor"
                            placeholder="Vendor"
                            defaultValue={vehicle?.vendor} />
                        <label htmlFor="floatingvendor">Vendor</label>
                    </div>
                    {error
                        ?.vendor
                        ?.length
                        ? <small className="text-danger">* {error.vendor}</small>
                        : null}
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <input
                            name="passengerCapacity"
                            type="number"
                            className="form-control"
                            id="floatingpassengerCapacity"
                            placeholder="Passenger capacity"
                            defaultValue={vehicle?.passengerCapacity} />
                        <label htmlFor="floatingpassengerCapacity">Passenger capacity</label>
                    </div>
                    {error
                        ?.passengerCapacity
                        ?.length
                        ? <small className="text-danger">* {error.passengerCapacity}</small>
                        : null}
                </div>
            </div>
            <div className="mt-3">
                <label className="form-label" htmlFor="image">Photo</label>
                <input name="image" type="file" className="form-control form-control-lg" id="image" />
            </div>
            {errorLoader
                ?.message
                ?.length
                ? <div class="alert alert-danger mt-2" role="alert"> {error.message} </div>
                : null}
            {error
                ?.message
                ?.length
                ? <div className="alert alert-danger mt-2" role="alert"> {error?.message} </div>
                : null}
            <button disabled={navigation.state === "submitting" || navigation.state === "loading"} className="btn btn-lg btn-primary mt-3" type="submit">Save</button>
            <hr className="my-4" />
            <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
        </Form>
    </div>)
}
export default VehicleForm