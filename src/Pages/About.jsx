import React from "react";

import DescriptionPanel from "../components/DescriptionPanel";
import bannerImg from "../assets/AboutBanner.svg";
import Banner from "../components/Banner.jsx";
import "../styles/About.scss";

function About() {
  // Création de la page a propos avec les composant Banner && DescriptionPAnel
  // on y passe directemenet leurs contenu individuellement title et content
  return (
    <>
      <Banner bannerImg={bannerImg} />
      <section className="about__container">
        <DescriptionPanel
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <DescriptionPanel
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
        />
        <DescriptionPanel
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <DescriptionPanel
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </>
  );
}

export default About;
