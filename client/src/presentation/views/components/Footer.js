import React from "react"
import { Link } from "react-router-dom"
const Footer = () => <>
    <footer className="text-center">
        <div className="container p-4 pb-0">
            <section className="">
                <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Have an account?</span>
                    <Link to="/auth/login" type="button" className="btn btn-outline-dark btn-rounded">
                        Sign in!
                    </Link>
                </p>
            </section>
        </div>
        <div className="text-center p-3 bg-primary text-white">
            © {new Date().getFullYear()} Copyright:&nbsp;
            <a className="text-white" href="https://utif.pages.dev/">Flutter-BC-19</a>
        </div>
    </footer>
</>
export default Footer