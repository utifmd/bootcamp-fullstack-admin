import { Route } from "react-router-dom"
import { AuthScope } from "../state"
import { Login, Register, AuthEdit, Error, DashboardGuest } from "../views/pages"

const Router = () => <Route
    path="/auth"
    element={<DashboardGuest />}>
    <Route
        index
        element={<Error />} />

    <Route
        path="login"
        element={<Login />} />

    <Route
        path="register"
        element={<Register />} />

    <Route
        path="edit"
        element={<AuthScope><AuthEdit/></AuthScope>} />
</Route>

export default Router