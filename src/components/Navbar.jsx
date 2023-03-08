import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="header">
      <div className="navbar__logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="navbar">
        <div className="navbarUnderline">Accueil</div>
        <div>A propos</div>
      </nav>
    </header>
  );
}

export default Navbar;
