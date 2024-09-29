import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx"; // Make sure this path is correct
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Correct usage of createRoot

root.render(
  <StrictMode>
    <Header /> {/* Ensure Header is included in the render method */}
    <RouterProvider router={router} />
  </StrictMode>
);
