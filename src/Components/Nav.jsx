import "./Nav.css"
import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className="navmain">
            <Link to="/" className="text-decoration-none text-black"><h1>Cloth Store</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="icons">
                {/* <Link to="/search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link> */}
                <Link to="/login">
                    <i className="fa-regular fa-circle-user"></i>
                </Link>
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </div>
    )
}
export default Nav;