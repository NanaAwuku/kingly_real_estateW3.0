import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import MarketplacePage from "./pages/MarketplacePage";
import CreatePropertyPage from "./pages/CreatePropertyPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage.jsx";
import { EthereumProvider } from "./context/EthereumContext";
import PropertyPage from "./pages/PropertyPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import PropertyListPage from "./pages/PropertyPage";
import NewPropertyPage from "./components/NewProperties";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
    path: "/viewproperty",
    element: <PropertyPage />,
  },
  {
    path: "/newProperty",
    element: <NewPropertyPage />,
  },
  {
    path: "/property/:tokenId",
    element: <PropertyDetailsPage />,
  },
  {
    path: "/property-list", // Define the path for the Property List page
    element: <PropertyListPage />
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EthereumProvider>
      <RouterProvider router={router}>
        {/* Add the ToastContainer here */}
        <ToastContainer
          position="top-right"
          autoClose={5000} // Set the auto-close duration (in milliseconds)
          hideProgressBar={false} // Show or hide the progress bar
          newestOnTop={false} // Display new toasts at the top
          closeOnClick // Close toasts on click
          rtl={false} // Right-to-left support
          pauseOnFocusLoss // Pause toasts when the window loses focus
          draggable // Allow dragging to dismiss toasts
          pauseOnHover // Pause toasts on hover
        />
      </RouterProvider>
    </EthereumProvider>
  </React.StrictMode>
);

