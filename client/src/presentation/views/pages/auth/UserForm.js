import React from "react"
import { Form, useActionData, useNavigation } from "react-router-dom"
const UserForm = ({ user, loaderErrorMessage }) => {
    const navigation = useNavigation()
    // const [toggleImage, setToggleImage] = useState(false)
    const { error } = useActionData() || {}

    return (<>
        <div className="container">
            <Form className="p-4 p-md-5" method="put" encType="multipart/form-data">
                <div className="lead mb-3">Please complete your info</div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="floatingName"
                                placeholder="Full name"
                                defaultValue={user.name} />
                            <label htmlFor="floatingName">Full name</label>
                        </div>
                        {error && error.name
                            ? <small className="text-danger">* {error.name}</small>
                            : null}
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input
                                name="telp"
                                type="number"
                                className="form-control"
                                id="floatingPhone"
                                placeholder="Phone number"
                                defaultValue={user.telp} />
                            <label htmlFor="floatingPhone">No. telp</label>
                        </div>
                        {error && error.telp
                            ? <small className="text-danger">* {error.telp}</small>
                            : null}
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input
                                name="identityNumber"
                                type="number"
                                className="form-control"
                                id="floatingNik"
                                placeholder="(NIK) Nomor induk kependudukan"
                                defaultValue={user.identityNumber} />
                            <label htmlFor="floatingNik">Nik</label>
                        </div>
                        {error && error.identityNumber
                            ? <small className="text-danger">* {error.identityNumber}</small>
                            : null}
                    </div>
                </div>
                <div className="mt-3">
                    <label className="form-label" htmlFor="image">Pas foto</label>
                    <input 
                        name="image" 
                        type="file"
                        className="form-control form-control-lg" id="image" />
                </div>
                
                {loaderErrorMessage && loaderErrorMessage
                    ? <div className="alert alert-danger mt-2" role="alert"> {loaderErrorMessage} </div>
                    : null}

                {error && error.message
                    ? <div className="alert alert-danger mt-2" role="alert"> {error.message} </div>
                    : null}

                <button
                    className="btn btn-lg btn-primary mt-3"
                    disabled={navigation.state === "loading" || navigation.state === "submitting"}
                    type="submit">Save</button>

                <hr className="my-4" />
                <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
            </Form>
        </div>
    </>)
}
export default UserForm