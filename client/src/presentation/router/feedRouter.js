import { Route } from "react-router-dom"
import { DashboardUser, Feed } from "../views/pages"

const Router = () => <Route
    path="/feeds"
    element={<DashboardUser />}>

    <Route
        index
        element={<Feed />} />
</Route>

export default Router