import { Form, useActionData, useNavigation } from "react-router-dom"

const Register = () => {
    const { error } = useActionData() || {}
    const navigation = useNavigation()

    return (<>
        <div className="my-4" />
        <div className="container">
            <div className="col-md-10 mx-auto col-lg-5">
                <Form method="post" className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="lead mb-3">Please sign in</div>
                    <div className="form-floating mb-2">
                        <input
                            name="email"
                            type="email"
                            className="form-control has-error"
                            id="floatingInput"
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {error
                        ?.email
                        ?.length
                        ? <small className="text-danger">* {error.email}</small>
                        : null}

                    <div className="form-floating mt-2">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {error
                        ?.password
                        ?.length
                        ? <small className="text-danger">* {error.password}</small>
                        : null}

                    {error
                        ?.message
                        ?.length
                        ? <div class="alert alert-danger mt-2" role="alert"> {error} </div>
                        : null}

                    <button
                        disabled={navigation.state === "loading" || navigation.state === "submitting"}
                        className="w-100 btn btn-lg btn-primary mt-3"
                        type="submit">Sign In</button>

                    <hr className="my-4" />
                    <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
                </Form>
            </div>
        </div>
    </>)
}
export default Register