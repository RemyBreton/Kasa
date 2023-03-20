import React, { useEffect, useState } from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import CarouselBanner from "../components/CarouselBanner";
import FlatHeader from "../components/FlatHeader";
import "../styles/FlatPage.scss";
import useApartment from "../hooks/useApartment";

function FlatPage() {
  // Création de la page de l'appartement avec les composants CarouselBanner FlatHeader && DescriptionPanel
  const flat = useApartment();

  if (flat == null) return <div>LOADING...</div>; // afin d'eviter une erreur 404 si une conexion internet instable
  return (
    <section className="flat-page">
      <CarouselBanner pictures={flat.pictures} />
      <FlatHeader flat={flat} />
      {/*passage de tout l'objet en props meme si c'est pas forcement genial de lui donner plus d'info que besoin sa restera toujours plus propre */}
      <div className="flat__container__description">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq) => (
            // Création d'une map <li> pour chaque donnée d'équipement dans l'api
            <li key={eq}>{eq}</li>
          ))}
        />
      </div>
    </section>
  );
}

export default FlatPage;
