import { Link, useLoaderData } from "react-router-dom"
import { asDateTimeFormat, asCapitalize } from "../../helper"
import { getAccountInfo } from "../../../../domain"
import FeedItem from "./FeedItem"

const Feed = () => {
    const { feeds, error } = useLoaderData()
    const { account } = getAccountInfo()
    return (
        <div className="container">
            {error &&
                <div className="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}
            <div className="row">
                <table>
                    {feeds
                        ?.map((history, i) =>
                            <FeedItem
                                key={i}
                                i={i}
                                history={history}
                                account={account} />
                        )
                    }
                </table>
            </div>
        </div>
    )
}
export default Feed