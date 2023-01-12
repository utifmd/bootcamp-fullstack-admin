import { Route } from "react-router-dom"
import { AuthScope } from "../state"
import { 
    Login, Register, AuthEdit, Error, DashboardGuest 
} from "../views/pages"
import { changePassword, signIn } from "../../domain"

const Router = () => <Route
    path="/auth"
    element={<DashboardGuest />}>
    <Route
        index
        element={<Error />} />

    <Route
        path="login"
        action={signIn}
        element={<Login />} />

    <Route
        path="register"
        element={<Register />} />

    <Route
        path="edit"
        action={changePassword}
        element={<AuthScope><AuthEdit/></AuthScope>} />
</Route>

export default Router