import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={isLoggedIn ? handleLogout : handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;