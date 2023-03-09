import React from "react";
import { Link, NavLink } from "react-router-dom"; // evitera la balise <a> qui au clique rechargera tout les fichier de la page

import "../styles/Navbar.scss";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="header">
      <Link to="/">
        <div className="navbar__logo">
          <img src={logo} alt="Logo Kasa" />
        </div>
      </Link>
      <nav className="navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
