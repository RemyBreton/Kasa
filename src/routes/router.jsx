import React from "react";
import HomePage from "../HomePage.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // importation des deux fonctions de react-router-dom
import Navbar from "../Layout/Navbar.jsx";
import Footer from "../Layout/Footer.jsx";
import Main from "../Layout/Main.jsx";
import ReactDOM from "react-dom/client";

const HeaderFooterLayout = () => {
  // recuperation de la navbar et du footer pour injecter un outlet au milieu
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />,
    children: [
      // outlet injecter
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat",
        element: <h1>Appartement</h1>,
      },
      {
        path: "/about",
        element: <h1>A propos</h1>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
