import { NavLink } from "react-router-dom";

    const Navbar = () => {
        return (
            <nav className="navbar navbar-dark bg-dark text-gray-0">
                <div className="container">
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/about" className="btn btn-outline-primary">About</NavLink>
                    <NavLink to="/contact" className="btn btn-outline-primary">Contact</NavLink>
                    <NavLink to="/Blog" className="btn btn-outline-primary">Blog</NavLink>
                </div>
        </nav>
    );
};
export default Navbar;