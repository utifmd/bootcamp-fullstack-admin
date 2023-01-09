const NavBar = ({ active, account, onSearchValueChange, sortToggle, setSortToggle }) => <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid justify-content-between">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'dashboard' && "active"}`} href="/dashboard"><i className="fa fa-road fa-xl mx-2"></i> Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'vehicles' && "active"}`} href="/vehicles">Vehicles</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${active === 'drivers' && "active"}`} href="/drivers">Drivers</a>
                    </li>
                </ul>
            </div>
            {setSortToggle ? <i
                className={`fa-solid ${sortToggle
                    ? "fa-arrow-down-wide-short"
                    : "fa-arrow-up-wide-short"}`}
                onClick={() => setSortToggle(!sortToggle)} />
                : null}
            {onSearchValueChange ? <div className="d-flex mx-2">
                <form className="d-flex input-group w-auto">
                    <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={onSearchValueChange}
                    />
                </form>
            </div> : null}
            { account ? <div className="d-flex align-items-center me-2">
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
                            src={account.imageUrl}
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        <strong className="d-none d-sm-block ms-1 text-dark">{account.name}</strong>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                    >
                        <li>
                            <a className="dropdown-item" href="/drivers/edit">Change profile info</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/auth/edit">Change password</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#top">Logout</a>
                        </li>
                    </ul>
                </div>
            </div> : null }
        </div>
    </nav>
    {/* <div class="p-5 bg-light mb-4">
        <h1 class="">Dashboard</h1>
        <nav class="d-flex">
            <h6 class="mb-0">
                <a href="" class="text-reset">Home</a>
                <span>/</span>
                <a href="" class="text-reset">Analytics</a>
                <span>/</span>
                <a href="" class="text-reset"><u>Dashboard</u></a>
            </h6>
        </nav>
    </div> */}
</>

export default NavBar