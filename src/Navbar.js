import React from "react";
import './Navbar.css'
import NavbarTop from "./NavbarTop";

import NavbarBtm from './NavbarBtm'

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavbarTop />
            <NavbarBtm />
        </div>
    )
}

export default Navbar;