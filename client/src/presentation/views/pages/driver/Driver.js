import { useLoaderData, useActionData } from "react-router-dom"
import { SubNavbar } from "../../components"
import { backgroundStyle } from "../../helper"
import DriverItem from "./DriverItem"

const Driver = () => {
    const { drivers, error } = useLoaderData()
    const actionData = useActionData()

    return (<div className="bg-image" style={backgroundStyle}>
        <div className="container py-5">
            <SubNavbar isSearch={true} />

            {actionData?.error || error &&
                <div class="alert alert-danger m-5" role="alert"> {actionData.error?.message || error?.message || error} </div>}

            <div className="container pt-4 g-2">
                <div class="row row-cols-1 row-cols-md-2">
                    {actionData?.
                        drivers?.map((driver, i) => <DriverItem key={i} driver={driver} />) ||
                        drivers?.map((driver, i) => <DriverItem key={i} driver={driver} />)
                    }
                </div>
            </div>
        </div>
    </div>)
}
export default Driver