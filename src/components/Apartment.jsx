import React from "react";
import { Link } from 'react-router-dom'; // evitera la balise <a> qui au clique rechargera tout les fichier de la page 

import "../styles/Apartment.scss";

function Apartment() {
  return (
    <Link className="apartment__anchor" to="/flat">
      <article className="apartment">
        <h2 className="apartment__title">Titre de la location</h2>
      </article>
    </Link>
  );
}

export default Apartment;
