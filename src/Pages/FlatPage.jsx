import React, { useEffect, useState } from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner";
import FlatHeader from "../components/FlatHeader";
import "../styles/FlatPage.scss";
import useApartment from "../hooks/useApartment";

function FlatPage() {
  const flat = useApartment();

  if (flat == null) return <div>LOADING...</div>; // afin d'eviter une erreur 404 si une conexion internet instable
  return (
    <section className="flat-page">
      <ImageBanner pictures={flat.pictures} />
      <FlatHeader flat={flat} />
      {/*passage de tout l'objet en props meme si c'est pas forcement genial de lui donner plus d'info que besoin sa restera toujours plus propre */}
      <div className="flat__container__description">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel title="Equipements" content={flat.equipments.map(eq => <li>{eq}</li>)} />
      </div>
    </section>
  );
}

export default FlatPage;
 