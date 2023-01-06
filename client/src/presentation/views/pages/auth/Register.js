import { Header } from "../../partials"
const Register = () => <>
    <Header />
    <div className="my-4" />
    <div className="container">
        <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light was-validated">
                <div className="lead mb-3">Please sign up</div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" required />
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign Up</button>
                <hr className="my-4" />
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
        </div>
    </div>
</>
export default Register