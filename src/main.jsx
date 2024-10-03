import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
import SignIn from "./components/custom/SignIn.jsx"; // Ensure this path is correct
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the routes for the app
const router = createBrowserRouter([
  {
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
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
