import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();
  useEffect(() => {
    // fetch du db.Json par rapport à son id de location afin de renvoyer l'objet correspondant
    const abordController = new AbortController();
    fetch("src/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
    return () => {
      // function de clean up en mode dev toujours appelé en first arretera le fetch lorsce que le composant est demonté
      abordController.abort();
    };
  }, []);
  return flat;
}

export default useApartment;
