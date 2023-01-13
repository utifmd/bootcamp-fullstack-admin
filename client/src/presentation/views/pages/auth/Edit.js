import { useLoaderData } from "react-router-dom"
import UserForm from "./UserForm"

const Edit = () => {
    const { auth, error } = useLoaderData()
    return (<UserForm user={auth} loaderErrorMessage={error?.message} />)
}
export default Edit