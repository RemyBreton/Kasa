import React, { useEffect, useState } from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner";
import FlatHeader from "../components/FlatHeader";

import "../styles/FlatPage.scss";
import { useLocation } from "react-router-dom";

function FlatPage() {
  // au lancement de FlatPage lancement de fetchApartmentsData
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  // recuperation de la valeur flat de la fonction fetchApartmentData
  useEffect(fetchApartmentData, []);
  //useEffect avec une array vide == lancera l'action au moment du chargement du composant

  function fetchApartmentData() {
    // fetch du db.Json par rapport à son id de location afin de renvoyer l'objet correspondant
    fetch("src/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>LOADING...</div>; // afin d'eviter une erreur 404 si une conexion internet instable
  return (
    <section className="flat-page">
      <ImageBanner pictures={flat.pictures} />
      <FlatHeader flat={flat}/>
      {/*passage de tout l'objet en props meme si c'est pas forcement genial de lui donner plus d'info que besoin sa restera toujours plus propre */}
      <div className="flat__container__description">
        <DescriptionPanel title="Description" content={flat.description}/>
        <DescriptionPanel title="Equipements" content={flat.equipments}/>
      </div>
    </section>
  );
}

export default FlatPage;
