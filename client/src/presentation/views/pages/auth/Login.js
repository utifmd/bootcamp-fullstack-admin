import { useState } from "react"
import { useAuth } from "../../../state"

const Register = () => {
    const [fields, setFields] = useState({
        email: "",
        password: "",
        error: {}
    })
    const { auth, onLogin } = useAuth()

    const onValueChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        fields[name] = value
        fields = { ...fields, ...fields }

        setFields(fields)
    }
    const isFormValiated = () => {
        const { email, password } = fields
        let formError = {}
        if (!email) formError.email = "Email could not be empty."
        if (!password) formError.password = "Password could not be empty."

        setFields({ error: formError, fields: fields })
        return !Object.entries(formError).length
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = fields
        if (!isFormValiated()) {
            console.log("failed")
            return
        }
        setFields({ loading: true })
        console.log("submit")
        try {
            await onLogin(email, password)
        } catch (error) {
            console.log("invalid user")
            setFields({error})
        }
    }
    return (<>
        <div className="my-4" />
        <div className="container">
            <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-light">
                    <div className="lead mb-3">Please sign in</div>
                    <div className="form-floating mb-2">
                        <input
                            name="email"
                            type="email"
                            disabled={auth.loading}
                            className="form-control has-error"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={onValueChange}
                            required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {fields.error
                        ?.email
                        ?.length
                        ? <small className="text-danger">* {fields.error.email}</small>
                        : null}

                    <div className="form-floating mt-2">
                        <input
                            name="password"
                            type="password"
                            disabled={auth.loading}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={onValueChange}
                            required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {fields.error
                        ?.password
                        ?.length
                        ? <small className="text-danger">* {fields.error.password}</small>
                        : null}

                    {auth.error // ?.message
                        ?.length
                        ? <div class="alert alert-danger mt-2" role="alert"> {auth.error} </div>
                        : null}
                        
                    <button
                        disabled={auth.loading}
                        className="w-100 btn btn-lg btn-primary mt-3"
                        onClick={onSubmit}
                        type="submit">Sign In</button>

                    <hr className="my-4" />
                    <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
                </form>
            </div>
        </div>
    </>)
}
export default Register