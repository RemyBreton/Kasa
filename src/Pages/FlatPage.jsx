import React from "react";
import FlatDescription from "../components/FlatDescription";
import FlatPageBanner from "../components/FlatPageBanner";
import FlatHeader from "../components/FlatHeader";

import "../styles/FlatPage.scss";

function ApartmentPage() {
  return (
    <section className="flat-page">
      <FlatPageBanner />
      <FlatHeader />
      <div className="flat__container__description">
        <FlatDescription />
        <FlatDescription />
      </div>
    </section>
  );
}

export default ApartmentPage;
