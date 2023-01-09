import { Route, Outlet } from "react-router-dom"
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
        element={<AuthEdit />} />
</Route>

export default Router