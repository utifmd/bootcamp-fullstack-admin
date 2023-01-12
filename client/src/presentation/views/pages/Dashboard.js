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
            {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav> */}
            <Outlet />
        </div>
    </>)
}
export {
    DashboardUser, DashboardGuest
}