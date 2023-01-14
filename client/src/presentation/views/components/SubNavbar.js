import { Form, Link } from "react-router-dom"

const SubNavbar = ({
    sortToggle, setSortToggle, isBtnNewVehicle, isSearch, isDateStart }) => {
    return (<>
        <div className="d-flex align-items-center">
            {isSearch ? <div className="d-flex">
                <Form method="post" className="d-flex input-group w-auto">
                    <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
                    <input
                        name="query"
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                </Form>
                <Link className="input-group-text border-0" id="search-addon"><i className="fas fa-close"></i></Link>
            </div> : null}
            {isDateStart ? <div className="d-flex">
                <Form method="post" className="d-flex input-group w-auto" >
                    <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
                    <div class="input-group log-event" >
                        <input
                            id="datetimepicker"
                            name="filterpicker"
                            type="datetime-local"
                            class="form-control"  />
                        <input type="submit" style={{display: 'none'}} />
                    </div>
                </Form>
                <Link className="input-group-text border-0" id="search-addon"><i className="fas fa-close"></i></Link>
            </div> : null}
            {setSortToggle ? <i
                className={`fa-solid ${sortToggle
                    ? "fa-arrow-down-wide-short"
                    : "fa-arrow-up-wide-short"}`}
                onClick={() => setSortToggle(!sortToggle)} />
                : null}
            {isBtnNewVehicle
                ? <Link to="../add" className="input-group-text border-0"><i className="fa-solid fa-plus" /></Link>
                : null}
        </div>
    </>)
}
export default SubNavbar