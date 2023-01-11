import { Link, useNavigation } from "react-router-dom"
import { useAuth } from "../../state"
import { Loading } from "../components"

const NavBar = () => {
    const { auth, onLogout } = useAuth()
    const navigation = useNavigation()

    console.log(auth)
    return (<nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid justify-content-between">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/feeds"><i className="fa fa-road fa-xl mx-2"></i> Feeds</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vehicle/list">Vehicles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/driver/list">Drivers</Link>
                    </li>
                </ul>
            </div>
            {navigation.state === "loading" ? <Loading /> : null}
            {auth?.token?.name ? <div className="d-flex align-items-center me-2">
                <div className="dropdown">
                    <Link
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        to="#top"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={auth?.token?.imageUrl}
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        <strong className="d-none d-sm-block ms-1 text-dark">{auth?.token?.name}</strong>
                    </Link>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                    >
                        <li>
                            <Link className="dropdown-item" to="/driver/edit">Change profile info</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/auth/edit">Change password</Link>
                        </li>
                        <li>
                            <div onClick={onLogout} className="dropdown-item">Logout</div>
                        </li>
                    </ul>
                </div>
            </div> : null}
        </div>
    </nav>)
}

export default NavBar