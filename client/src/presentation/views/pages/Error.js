import React from "react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (<>
        <div className="container py-5" id="error-page">
            <h1 className="lead">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-danger">Page {error.statusText || "error"} { error.message || "message"}</i>
            </p>
        </div>
    </>)
}
export default ErrorPage