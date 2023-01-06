const NavBar = () => <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid justify-content-between">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav flex-row d-none d-md-flex">
                    <li className="nav-item me-3 me-lg-1 active">
                        <a className="nav-link" href="#top">
                            <span><i className="fas fa-home fa-lg"></i></span>
                            {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Vehicles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Drivers</a>
                    </li>
                </ul>
            </div>
            <div className="d-flex mx-2">
                <form className="d-flex input-group w-auto">
                    <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                </form>
            </div>
            <div className="d-flex align-items-center">
                <div className="dropdown">
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="#top">Some news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#top">Another news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#top">Something else here</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#top"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        <strong className="d-none d-sm-block ms-1">John</strong>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                    >
                        <li>
                            <a className="dropdown-item" href="#top">My profile</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#top">Settings</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#top">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</>

export default NavBar