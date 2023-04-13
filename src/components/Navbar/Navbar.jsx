import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/">
            <span className="navbar-logo">
                <img src={Logo} alt="logo"/>
            </span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}> Home </Link>
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}> About </Link>
                    <Link to="/shop" className="nav-links" onClick={closeMobileMenu}> Shop </Link>
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}> Contact </Link>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
