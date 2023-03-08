import React from "react";
import "../styles/Main.css";

function Main({ children }) {
  return <main className="blockPage">{...children}</main>;
}

export default Main;
