import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useApartment() {
  // Recuperation des data d'un seul apartment dans l'api
  const [flat, setFlat] = useState(null);
  const location = useLocation();
  useEffect(() => {
    // fetch du db.Json par rapport à son id de location afin de renvoyer l'objet correspondant

    fetch("https://remybreton.github.io/api/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
  }, []);
  return flat;
}

export default useApartment;
