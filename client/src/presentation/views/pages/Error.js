import { useRouteError } from "react-router-dom"
import { Header } from "../components"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error?.statusText, error?.message)

    return (<>
        <div className="container py-5" id="error-page">
            <h1 className="lead">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-danger">Page {error?.statusText || "error"} { error?.message || "message"}</i>
            </p>
        </div>
    </>)
}
export default ErrorPage