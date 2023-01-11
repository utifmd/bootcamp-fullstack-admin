import { useLoaderData } from "react-router-dom"

const Edit = () => {
    const driver = useLoaderData()
    const onValueChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        console.log(name, value)
    }
    return(<>
        <div className="container">
            <form className="p-4 p-md-5">
                <div className="lead mb-3">Please complete your info</div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                name="name" 
                                type="email" 
                                className="form-control" 
                                id="floatingName" 
                                placeholder="Full name"
                                defaultValue={driver.name}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingName">Full name</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                name="telp" 
                                type="number" 
                                className="form-control" 
                                id="floatingPhone" 
                                placeholder="Phone number"
                                defaultValue={driver.telp}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingPhone">No. telp</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input 
                                name="identityNumber" 
                                type="number" 
                                className="form-control" 
                                id="floatingNik" 
                                placeholder="(NIK) Nomor induk kependudukan"
                                defaultValue={driver.identityNumber}
                                onChange={onValueChange}
                                required />
                            <label htmlFor="floatingNik">Nik</label>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label class="form-label" for="imageFile">Pas foto</label>
                    <input name="imageFile" type="file" class="form-control form-control-lg" id="imageFile" />
                </div>
                <button className="btn btn-lg btn-primary mt-3" type="submit">Submit</button>
                <hr className="my-4" />
                <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
            </form>
        </div>
    </>)
}
export default Edit