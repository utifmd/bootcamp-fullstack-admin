import { Form, useActionData } from "react-router-dom"
const Change = () => {
    const actionData = useActionData()
    const { error } = actionData || {}
    return (<>
        <div className="my-4" />
        <div className="container">
            <div className="col-md-10 mx-auto col-lg-5">
                <Form method="post" className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="lead mb-3">Please change your password </div>
                    <div className="form-floating mb-2">
                        <input
                            name="currentPassword"
                            type="password"
                            className="form-control has-error"
                            id="floatingInput"
                            placeholder="name@example.com"
                            />
                        <label htmlFor="floatingInput">Current password</label>
                    </div>
                    { error
                        ?. currentPassword
                        ?. length 
                        ? <small className="text-danger">* { error.currentPassword }</small> 
                        : null }
                    <div className="form-floating mt-2">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="New password"
                            />
                        <label htmlFor="floatingPassword">New password</label>
                    </div>
                    { error
                        ?. password
                        ?. length 
                        ? <small className="text-danger">* { error.password }</small> 
                        : null }
                    <div className="form-floating mt-2">
                        <input
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password"
                            />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>
                    { error
                        ?. confirmPassword
                        ?. length 
                        ? <small className="text-danger">* { error.confirmPassword }</small> 
                        : null }

                    { error
                        ?. message
                        ?. length 
                        ? <div class="alert alert-danger mt-2" role="alert"> { error.message } </div> 
                        : null }
                    <button
                        className="w-100 btn btn-lg btn-primary mt-3"
                        type="submit">Change password</button>

                    <hr className="my-4" />
                    <small className="text-muted">By clicking change password, you agree to the terms of use.</small>
                </Form>
            </div>
        </div>
    </>)
}
export default Change