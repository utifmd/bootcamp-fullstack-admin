import { useLoaderData } from "react-router-dom"

const Edit = () => {
    const vehicle = useLoaderData()
    const onValueChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        console.log(name, value)
    }
    return (<>
        {/* <NavBar active={'vehicles'} /> */}
        <div className="container">
            <form className="p-4 p-md-5">
                <div className="lead mb-3">Please change vehicle info</div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="floatingName"
                                placeholder="Vehicle name"
                                defaultValue={vehicle?.name}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingName">Vehicle name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                name="route"
                                type="text"
                                className="form-control"
                                id="floatingRoute"
                                placeholder="Phone number"
                                defaultValue={vehicle?.route}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingRoute">Route</label>
                        </div>
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
                                defaultValue={vehicle?.policeNumber}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingpoliceNumber">Plat nomor</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input
                                name="vendor"
                                type="text"
                                className="form-control"
                                id="floatingvendor"
                                placeholder="Vendor"
                                defaultValue={vehicle?.vendor}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingvendor">Vendor</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input
                                name="passengerCapacity"
                                type="number"
                                className="form-control"
                                id="floatingpassengerCapacity"
                                placeholder="Passenger capacity"
                                defaultValue={vehicle?.passengerCapacity}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingpassengerCapacity">Passenger capacity</label>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label class="form-label" for="imageFile">Photo</label>
                    <input name="imageFile" type="file" class="form-control form-control-lg" id="imageFile" />
                </div>
                <button className="btn btn-lg btn-primary mt-3" type="submit">Update</button>
                <hr className="my-4" />
                <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
            </form>
        </div>
    </>)
}
export default Edit