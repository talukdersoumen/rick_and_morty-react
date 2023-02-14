import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CastsList from "./Pages/CastsList";
import CastDetails from "../src/Pages/CastDetails";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "casts",
    element: <CastsList />,
  },
  {
    path: "castdetails",
    element: <CastDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
