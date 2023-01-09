import { Outlet } from "react-router-dom"
import { Header, NavBar } from "../components"
import { backgroundStyle } from "../helper"

const DashboardGuest = () => {
    return (<>
        <Header />
        <Outlet />
    </>)
}
const DashboardUser = () => {
    return (<>
        <div className="bg-image" style={backgroundStyle}>
            <NavBar />
            <Outlet />
        </div>
    </>)
}
export {
    DashboardUser, DashboardGuest
}