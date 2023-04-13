import { useState, useEffect } from "react";

const useApartments = () => {
  // Récuperation des appartements et leurs data dans l'api
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // hook qui va executer le composant quand il sera monté
    fetch("https://remybreton.github.io/api/db.json") //, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }, []);
  return apartments;
};

export default useApartments;
