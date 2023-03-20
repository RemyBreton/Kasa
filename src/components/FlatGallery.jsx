import React, { useEffect, useState } from "react";
import "../styles/FlatGallery.scss";
import Apartment from "./Apartment.jsx";
import useApartments from "../hooks/useApartments";

function FlatGallery() {
  // Création dynamique de la grille contenant les appartements grace à map()
  const apartments = useApartments();
  return (
    <section className="grid">
      {apartments.map((apartment) => (
        // Pour chaque apartment.id de l'api création du component apartment avec son titre et son image
        <Apartment
          key={apartment.id}
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </section>
  );
}

export default FlatGallery;
