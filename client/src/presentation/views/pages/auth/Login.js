import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../state"
const fields = {
    email: "",
    password: ""
}
const Register = () => {
    const [form, setForm] = useState({ fields, error: {}, loading: false })
    const navigate = useNavigate()
    const { onLogin } = useAuth()

    const onValueChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        fields[name] = value
        form.fields = { ...form.fields, ...fields }

        setForm(form)
    }
    const isFormValiated = () => {
        const { email, password } = form.fields
        let error = {}
        if (!email) error.email = "Email could not be empty."
        if (!password) error.password = "Password could not be empty."

        setForm({ error, fields: form.fields, loading: form.loading })
        return !Object.entries(error).length
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = form.fields
        if (!isFormValiated()) {
            console.log("failed")
            console.log(form)
            return
        }
        setForm({ loading: true })
        console.log("submit")
        try {
            await onLogin(email, password)
            navigate("/feeds")
        } catch (error) {
            console.log("invalid user")
            setForm({error})
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
                            disabled={form.loading}
                            className="form-control has-error"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={onValueChange}
                            required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {form.error
                        ?.email
                        ?.length
                        ? <small className="text-danger">* {form.error.email}</small>
                        : null}
                    <div className="form-floating mt-2">
                        <input
                            name="password"
                            type="password"
                            disabled={form.loading}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={onValueChange}
                            required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {form.error
                        ?.password
                        ?.length
                        ? <small className="text-danger">* {form.error.password}</small>
                        : null}

                    {form.error
                        ?.message
                        ?.length
                        ? <div class="alert alert-danger mt-2" role="alert"> {form.error.message} </div>
                        : null}
                        
                    <button
                        disabled={form.loading}
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