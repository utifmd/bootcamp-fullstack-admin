import { Route } from "react-router-dom"
import { DashboardUser, Feed } from "../views/pages"
import { AuthScope } from "../state"

const Router = () => <Route
    path="/feeds"
    element={<DashboardUser />}>

    <Route
        index
        element={<AuthScope><Feed/></AuthScope>}/>
</Route>

export default Router