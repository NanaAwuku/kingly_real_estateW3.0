import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index';
import PropertyCreationPage from './pages/CreateListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/listing",
    element: <PropertyCreationPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


