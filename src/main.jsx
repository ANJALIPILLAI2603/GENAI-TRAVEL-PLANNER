import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
<<<<<<< HEAD
import Header from "./components/custom/Header.jsx";
import HotelRecommendation from './create-trip/HotelRecommendation.jsx'; // Make sure this path is correct
=======
import SignIn from "./components/custom/SignIn.jsx"; // Ensure this path is correct
>>>>>>> acbd5c8604ff41467dc5848127ff4abe7516cad3
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the routes for the app
const router = createBrowserRouter([
  {
<<<<<<< HEAD
    path:"/HotelRecommendation",
    element: <HotelRecommendation/>
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
=======
    path: "/", // Default route
    element: <App />, // App component contains Header and Outlet for nested routing
    children: [
      {
        path: "/SignIn", // Route for SignIn
        element: <SignIn />,
      },
      {
        path: "/create-trip", // Route for CreateTrip
        element: <CreateTrip />,
      },
    ],
>>>>>>> acbd5c8604ff41467dc5848127ff4abe7516cad3
  },
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
    <RouterProvider router={router} />
  </StrictMode>
);
