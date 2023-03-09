import React from "react";
import "../styles/Main.scss";

function Main({ children }) {
  // function qui va venir ajouter une balise main autour des childrens
  return <main className="blockPage">{children}</main>;
}

export default Main;
