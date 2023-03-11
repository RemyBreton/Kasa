import React from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner";
import FlatHeader from "../components/FlatHeader";

import "../styles/FlatPage.scss";

function FlatPage() {
  return (
    <section className="flat-page">
      <ImageBanner />
      <FlatHeader />
      <div className="flat__container__description">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </section> 
  );
}

export default FlatPage;
