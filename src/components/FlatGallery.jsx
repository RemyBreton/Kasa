import React, { useEffect, useState } from "react";
import "../styles/FlatGallery.scss";
import Apartment from "./Apartment.jsx";

function FlatGallery() {
  // au lancement de FlatGallery lancement de fetchApartments qui fera un fetch du db.Json puis fera un setApartments
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);
  //useEffect avec une array vide == lancera l'action au moment du chargement du composant

  function fetchApartments() {
    fetch("src/db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <section className="grid">
      {apartments.map((apartment) => (
        <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
      ))}
    </section>
  );
}

export default FlatGallery;
