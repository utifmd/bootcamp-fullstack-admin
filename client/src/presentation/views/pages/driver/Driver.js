import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { SubNavbar } from "../../components"
import { backgroundStyle } from "../../helper"
import DriverItem from "./DriverItem"

const Driver = () => {
    const [regex, setRegex] = useState("")
    const [sortToggle, setSortToggle] = useState(false)
    const {drivers, error} = useLoaderData()

    const onSearchValueChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        setRegex(value)
    }
    return (<div className="bg-image" style={backgroundStyle}>
        <div className="container py-5">
            <SubNavbar
                // sortToggle={sortToggle}
                // setSortToggle={setSortToggle}
                onSearchValueChange={onSearchValueChange} />
            {error &&
                <div class="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}

            <div className="container pt-4 g-2">
                <div class="row row-cols-1 row-cols-md-2">
                    {drivers
                        .sort((a, b) => sortToggle
                            ? a?.name - b?.name
                            : b?.name - a?.name)
                        .filter(({ name, email }) => name?.includes(regex) || email?.includes(regex))
                        .map(driver => <DriverItem driver={driver} />)
                    }
                </div>
            </div>
        </div>
    </div>)
}
export default Driver