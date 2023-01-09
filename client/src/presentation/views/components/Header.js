import { Link } from "react-router-dom"
const Header = () => <header className="p-4">
    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
        <i className="fa fa-road fa-xl mx-2"></i>
        <span className="fs-4">Pool Angkot</span>
    </Link>
</header>
export default Header