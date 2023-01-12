import { Route } from "react-router-dom"
import {
    Login, Register, AuthEdit, AuthChange, Error, DashboardGuest
} from "../views/pages"
import {
    changePassword, signUp, signIn, checkAccessToken, getAuth, putAuth, 
} from "../../domain"
import { AuthScope } from "../state"

const Router = () => <Route
    path="/auth"
    element={<DashboardGuest />}>
    <Route
        index
        element={<Error />} />

    <Route
        path="login"
        loader={checkAccessToken}
        action={signIn}
        element={<Login />} />

    <Route
        path="register"
        loader={checkAccessToken}
        action={signUp}
        element={<Register />} />

    <Route
        path="change"
        action={changePassword}
        element={<AuthScope><AuthChange /></AuthScope>} />

    <Route
        path="edit"
        loader={getAuth}
        action={putAuth}
        element={<AuthScope><AuthEdit/></AuthScope>} />

</Route>

export default Router