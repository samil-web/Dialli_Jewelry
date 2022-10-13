import React from "react";
import logo from './assets/Dialli_Logo.png'
const NavbarTop = () => {
    return (
        <ul className="NavbarTop">
            <div className="NavLeft">
                <li>Home</li>
                <li>Shop</li>
            </div>
            <div className="Middle">
                <p className="Logo">
                    <img src={logo}></img>
                </p>
            </div>
            <div className="NavRight">
                <li>Blog</li>
                <li>Contact</li>
            </div>
        </ul>
    )
}

export default NavbarTop;