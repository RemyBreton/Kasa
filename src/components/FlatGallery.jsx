import React, { useEffect, useState } from "react";
import "../styles/FlatGallery.scss";
import Apartment from "./Apartment.jsx";
import useApartments from "../hooks/useApartments";

function FlatGallery() {
  const apartments = useApartments();
  return (
    <section className="grid">
      {apartments.map((apartment) => (
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
