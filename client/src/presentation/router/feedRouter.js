import { Route } from "react-router-dom"
import { DashboardUser, Feed } from "../views/pages"
import { AuthScope } from "../state"
import { getFeeds } from "../../domain"

const Router = () => <Route
    path="feeds"
    element={<AuthScope><DashboardUser/></AuthScope>}>

    <Route
        index
        loader={getFeeds}
        element={<Feed/>}/>
</Route>

export default Router