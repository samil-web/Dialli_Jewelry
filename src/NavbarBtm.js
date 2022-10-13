import React from "react";
// import braceletbtm from './assets/Dialli_img5.png'
// import bracelettop from './assets/Dialli_img3.png'
// import necklacetop from './assets/Dialli_necklace2.png'
// import ring1 from './assets/Dialli_ring1.png'
// img5-btm right,img3-top left
// necklace2 -top right, ring1 - btm left  
const NavbarBtm = () => {
    return (
        <div className="NavbarBtm">
            <div className="NavbarBtmLeft">

            </div>
            <div className="NavbarBtmMiddle">
                <h1>Dialli</h1>
                <h1>Jewelry</h1>
                <button className="shopbtn">
                    <span className="shop">Shop Now</span>
                </button>
            </div>
            <div className="NavbarBtmRight">

            </div>
        </div>
    )
}
export default NavbarBtm;