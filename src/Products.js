import React from "react";
import necklace from "./assets2/DIor_necklace.png"
import ring from "./assets2/Rings.png"
import earring from "./assets2/earrings.png"
import bracelet from "./assets2/Bracelets.png"

import "./Products.css"
const Product = () => {
    return (
        <div className='images'>
            <img className="ring" src={ring}></img>
            <img className="bracelet" src={bracelet}></img>
            <img className="earring" src={earring}></img>
            <img className="necklace" src={necklace}></img>
            <p className="Rings">Rings</p>
            <p className="Bracelets">Bracelets</p>
            <p className="Earrings">Earrings</p>
            <p className="Necklace">Necklace</p>
        </div>
    )
}

export default Product