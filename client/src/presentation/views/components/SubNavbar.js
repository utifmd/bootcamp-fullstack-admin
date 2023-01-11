const SubNavbar = ({ sortToggle, setSortToggle, onSearchValueChange }) => {    
    return (<>
        <div className="d-flex align-items-center">
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
        </div>
    </>)
}
export default SubNavbar