import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    // {
    //     path: "/",
    //     element: <div>Hello world!</div>,
    //   },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
