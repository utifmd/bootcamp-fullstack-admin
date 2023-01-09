import { useRouteError } from "react-router-dom"
import { Header } from "../components"

const ErrorPage = () => {
    const { statusText, message } = useRouteError()
    console.log(statusText, message)

    return (<>
        <Header />
        <div className="container" id="error-page">
            <h1 className="lead">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-danger">Page {statusText} { message}</i>
            </p>
        </div>
    </>)
}
export default ErrorPage