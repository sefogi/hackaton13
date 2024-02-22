import "./brands.css"
import React from 'react'
import agua3 from "../../assets/Images/agua3.png"
import polvo1 from "../../assets/Images/polvo1.png";
import collar2 from "../../assets/Images/collar2.png";
import piedra18 from "../../assets/Images/piedra18.png";
import cuadro2 from "../../assets/Images/cuadro2.png";


const Brands = () => {
  return (
    <>
    <h2>Empresas Colaboradoras</h2>
    <div className="brands-container">
      <div className="brand-item">
        <img src={agua3} alt="Brand 1" />
        <p>Moon Bliss Aqua</p>
      </div>
      <div className="brand-item">
        <img src={polvo1} alt="Brand 2" />
        <p>StellarAlchemy Cosmetics</p>
      </div>
      <div className="brand-item">
        <img src={collar2} alt="Brand 3" />
        <p>LunarGlow Gems</p>
      </div>
      <div className="brand-item">
        <img src={piedra18} alt="Brand 4" />
        <p>Moonstone Marvels</p>
      </div>
      <div className="brand-item">
        <img src={cuadro2} alt="Brand 4" />
        <p>LunarCanvas Creations</p>
      </div>
    </div>
    </>
  );
}


export default Brands;
