import { Link } from "react-router-dom"

const SubNavbar = ({ sortToggle, setSortToggle, isBtnNewVehicle, onSearchValueChange }) => {
    return (<>
        <div className="d-flex align-items-center">
            {onSearchValueChange ? <div className="d-flex">
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
            {setSortToggle ? <i
                className={`fa-solid ${sortToggle
                    ? "fa-arrow-down-wide-short"
                    : "fa-arrow-up-wide-short"}`}
                onClick={() => setSortToggle(!sortToggle)} />
                : null}
            {isBtnNewVehicle
                ? <Link to="../add" className="input-group-text border-0"><i className="fa-solid fa-square-plus" /></Link>
                : null}
        </div>
    </>)
}
export default SubNavbar