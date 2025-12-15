import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error: {error.status}</h1>
            <h2>Error: {error.data}</h2>
        </div>
    )
}
export default Error;