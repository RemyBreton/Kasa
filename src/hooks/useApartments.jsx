import { useState, useEffect } from "react";

const useApartments = () => {
  // Récuperation des appartements et leurs data dans l'api
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // hook qui va executer le composant quand il sera monté
    const abortController = new AbortController(); // permettra l'arret du fetch
    fetch("https://remybreton.github.io/api/db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
    return () => {
      // function de clean up en mode dev toujours appelé en first arretera le fetch lorsce que le composant est demonté
      abortController.abort();
    };
  }, []);
  return apartments
};

export default useApartments; 
