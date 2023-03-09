import React from "react";
import { Link } from 'react-router-dom'; // evitera la balise <a> qui au clique rechargera tout les fichier de la page 

import "../styles/Apartment.scss";

function Apartment() {
  return (
    <Link to="/flat">
      <div className="apartment">
        <div className="apartment__title">Titre de la location</div>
      </div>
    </Link>
  );
}

export default Apartment;
