import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MetaMaskProvider } from './context/MetaMaskContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import PropertyCreationPage from "./pages/CreateListing";
import HouseContestProvider from "./context/HouseContest";
import ListingPage from "./pages/ListingPage";
import MarketplacePage from "./pages/MarketplacePage";
import CreatePropertyPage from "./pages/CreatePropertyPage";
import PropertyDetailsPage from "./pages/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/listing",
    element: <PropertyCreationPage />,
  },
  {
    path: "/market",
    element: <MarketplacePage />,
  },
  {
    path: "/create",
    element: <CreatePropertyPage />,
  },
  {
    path: "/listMe",
    element: <ListingPage />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HouseContestProvider>
    <MetaMaskProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </MetaMaskProvider>
  </HouseContestProvider>
);
