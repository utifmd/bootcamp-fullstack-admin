import React from "react"
import { useLoaderData } from "react-router-dom"
import UserForm from "../auth/UserForm"

const Edit = () => {
    const { driver, error } = useLoaderData()

    return (<UserForm user={driver} loaderErrorMessage={error} />)
}
export default Edit