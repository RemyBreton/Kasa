import React from "react";
import HomePage from "../Pages/HomePage.jsx";
import FlatPage from '../Pages/FlatPage.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // importation des deux fonctions de react-router-dom
import Navbar from "../Layout/Navbar.jsx";
import Footer from "../Layout/Footer.jsx";
import Main from "../Layout/Main.jsx";
import ReactDOM from "react-dom/client";
import About from "../Pages/About.jsx";
import ErrorPage from '../Pages/ErrorPage.jsx';

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
    errorElement: <ErrorPage />,
    children: [
      // outlet injecter
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat/:id",
        element: <FlatPage /> 
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
