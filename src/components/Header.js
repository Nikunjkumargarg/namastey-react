import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <div className="header">
            <div>
                <img src = {LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><button className="login-btn" onClick={isLoggedIn ? handleLogout : handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button></li> 
                </ul> 
            </div>
        </div>
    );
};

export default Header;