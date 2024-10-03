import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";
import HotelRecommendation from './create-trip/HotelRecommendation.jsx'; // Ensure this path is correct
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the routes for the app
const router = createBrowserRouter([
  {
    path: "/HotelRecommendation",
    element: <HotelRecommendation />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  // Uncomment or add more routes as needed
  // {
  //   path: "/RestaurantRecommendation",
  //   element: <RestaurantRecommendation />, // Ensure this component exists
  // },
  // {
  //   path: "/Activities",
  //   element: <Activities />, // Ensure this component exists
  // },
  // {
  //   path: "/Transport",
  //   element: <Transport />, // Ensure this component exists
  // },
  // {
  //   path: "/Budget",
  //   element: <Budget />, // Ensure this component exists
  // },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header /> {/* Render the Header component */}
    <RouterProvider router={router} />
  </StrictMode>
);
