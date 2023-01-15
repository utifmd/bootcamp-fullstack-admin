import React, { useState } from "react"
import { useActionData, useLoaderData } from "react-router-dom"
import { getAccountInfo } from "../../../../domain"
import { SubNavbar } from "../../components"
import FeedItem from "./FeedItem"

const Feed = () => {
    const { feeds, error } = useLoaderData()
    const { account } = getAccountInfo()
    const actionData = useActionData()
    const [toggleDate, setToggleDate] = useState(false)
    return (
        <div className="container">
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
                    <tr>
                        <td>
                            <div className="py-5">

                                {toggleDate
                                    ? <SubNavbar isDateStart={true} setToggleDate={setToggleDate} />
                                    : <i className={`fa-solid fa-calendar`}
                                        onClick={() => setToggleDate(true)} />}
                            </div>
                        </td>
                        <td className={`border-start border-5`}></td>
                    </tr>
                    {actionData
                        ? actionData.feeds && actionData.feeds.map((history, i) =>
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
                    <tr className="py-3">
                        <td><div className="py-5"></div></td>
                        <td className={`border-start border-5`}></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Feed