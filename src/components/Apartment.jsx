import React from "react";
import { Link } from "react-router-dom"; // evitera la balise <a> qui au clique rechargera tout les fichier de la page

import "../styles/Apartment.scss";

function Apartment(props) {
  return (
    <Link
      className="apartment__anchor"
      to="/flat"
      state={{
        apartmentId: props.id,
      }}
    >
      <article className="apartment">
        <img src={props.imageUrl} alt="image de l'appartement" />
        <h2 className="apartment__title">{props.title}</h2>
      </article>
    </Link>
  );
}

export default Apartment;
