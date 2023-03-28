import React from "react";
import Navbar from "../Layout/Navbar";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

import "../styles/ErrorPage.scss";

function ErrorPage() {
  // Création de la page error avec les composants Navbar Main && Footer
  return (
    <>
      <Navbar />
      <Main>
        <section className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage; 
