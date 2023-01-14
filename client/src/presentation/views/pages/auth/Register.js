import React from "react"
import { Form, useActionData, useNavigation } from "react-router-dom"

const Register = () => {
    const { error } = useActionData() || {}
    const navigation = useNavigation()
    return (<>
        <div className="my-4" />
        <div className="container">
            <div className="col-md-10 mx-auto col-lg-5">
                <Form method="post" className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="lead mb-3">Please sign up</div>
                    <div className="form-floating mb-2">
                        <input
                            name="email"
                            type="email"
                            className="form-control has-error"
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    { error && error.email
                        ? <small className="text-danger">* { error.email }</small> 
                        : null }
                    <div className="form-floating mt-2">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    { error && error.password
                        ? <small className="text-danger">* { error.password }</small> 
                        : null }
                    <div className="form-floating mt-2">
                        <input
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password" />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>
                    { error && error.confirmPassword
                        ? <small className="text-danger">* { error.confirmPassword }</small> 
                        : null }

                    { error && error.message
                        ? <div className="alert alert-danger mt-2" role="alert"> { error.message } </div> 
                        : null }
                        
                    <button
                        className="w-100 btn btn-lg btn-primary mt-3"
                        disabled={navigation.state === "submitting" || navigation.state === "loading"}
                        type="submit">Sign Up</button>
                        
                    <hr className="my-4" />
                    <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                </Form>
            </div>
        </div>
    </>)
}
export default Register