import React from "react"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import { getAccountInfo } from "../../../domain"
import { useAuth } from "../../state"
import { Loading } from "../components"

const NavBar = () => {
    const navigation = useNavigation()
    const navigate = useNavigate()
    const auth = useAuth()
    const { account } = getAccountInfo()

    const onLogout = async (e) => {
        e.preventDefault()
        await auth.signOut()
        navigate(-1)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white"> {/*fix-top*/}
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
                    {navigation.state === "loading" || navigation.state === "submitting" ? <Loading /> : null}
                    {account && account.name ? <div className="d-flex align-items-center me-2">
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
                                    src={account.imageUrl}
                                    className="rounded-circle"
                                    style={{width:`25px`, height:`25px`, objectFit: `cover`}}
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                                <strong className="d-none d-sm-block ms-1 text-dark">{account.name !== 'null' ? account.name : account.role}</strong>
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/auth/edit">Change profile info</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/auth/change">Change password</Link>
                                </li>
                                <li>
                                    <div onClick={onLogout} className="dropdown-item pe-auto">Logout</div>
                                </li>
                            </ul>
                        </div>
                    </div> : null}
                </div>
            </nav>
        </>
    )
}

export default NavBar