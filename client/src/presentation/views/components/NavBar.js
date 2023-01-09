import { Link } from "react-router-dom"
const NavBar = ({ active, account, onSearchValueChange, sortToggle, setSortToggle }) => <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        <strong className="d-none d-sm-block ms-1 text-dark">{account.name}</strong>
                    </Link>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                    >
                        <li>
                            <Link className="dropdown-item" to="/drivers/edit">Change profile info</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/auth/edit">Change password</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="#top">Logout</Link>
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
                <Link to="" class="text-reset">Home</Link>
                <span>/</span>
                <Link to="" class="text-reset">Analytics</Link>
                <span>/</span>
                <Link to="" class="text-reset"><u>Dashboard</u></Link>
            </h6>
        </nav>
    </div> */}
</>

export default NavBar