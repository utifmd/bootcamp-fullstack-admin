import { Header } from "../../partials"
const Login = () => <>
    <Header />
    <div class="container">
        <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light was-validated">
                <div className="lead mb-3">Please sign in</div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign In</button>
                <hr class="my-4" />
                <small class="text-muted">© 2023-{new Date().getFullYear()}</small>
            </form>
        </div>
    </div>
</>
export default Login