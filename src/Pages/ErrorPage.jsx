import React from "react";
import Navbar from "../Layout/Navbar";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";

import "../styles/ErrorPage.scss";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <Main>
        <section className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <a href="/">Retourner sur la page d'accueil</a>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage; 
