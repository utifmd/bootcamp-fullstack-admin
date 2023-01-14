import { Route } from "react-router-dom"
import { DashboardUser, Feed, FeedEdit } from "../views/pages"
import { AuthScope } from "../state"
import { getFeeds, rangeFeeds, putHistory } from "../../domain"

const Router = () => <Route
    path="feeds"
    element={<AuthScope><DashboardUser/></AuthScope>}>

    <Route
        index
        loader={getFeeds}
        action={rangeFeeds}
        element={<Feed/>}/>

    <Route
        path="edit/:id/:vehicleId/:userId"
        action={putHistory}
        element={<FeedEdit/>}/>
</Route>

export default Router