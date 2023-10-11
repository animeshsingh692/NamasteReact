import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const errorMessage = useRouteError();
    return (
        <div>
            <h1>OOPS! Something went wrong</h1>
            <h5>{errorMessage.data}</h5>
            <h6>Returning with {errorMessage.status} status</h6>
        </div>
    )
}

export default ErrorPage;