import { Route } from "react-router-dom"
import { DashboardUser, Feed } from "../views/pages"
import { getFeeds } from "../../domain"

const Router = () => <Route
    path="feeds"
    element={<DashboardUser/>}>

    <Route
        index
        loader={getFeeds}
        element={<Feed/>}/>
</Route>

export default Router