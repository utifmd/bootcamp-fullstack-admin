import React from "react"
import { useActionData, useLoaderData } from "react-router-dom"
import { getAccountInfo } from "../../../../domain"
import { SubNavbar } from "../../components"
import FeedItem from "./FeedItem"

const Feed = () => {
    const { feeds, error } = useLoaderData()
    const { account } = getAccountInfo()
    const actionData = useActionData()
    return (
        <div className="container py-5">
            <SubNavbar isDateStart={true} />
            {actionData && actionData.error &&
                <div
                    className="alert alert-danger m-5"
                    role="alert">
                    {actionData.error.message || error}
                </div>
            }
            {error &&
                <div
                    className="alert alert-danger m-5"
                    role="alert">
                    {error.message || error}
                </div>
            }
            <div className="row">
                <table> 
                {actionData 
                ? actionData.feeds.map((history, i) =>
                    <FeedItem
                        key={i}
                        i={i}
                        history={history}
                        account={account} />
                )
                : feeds && feeds.map((history, i) =>
                    <FeedItem
                        key={i}
                        i={i}
                        history={history}
                        account={account} />
                )}
                </table>
            </div>
        </div>
    )
}
export default Feed