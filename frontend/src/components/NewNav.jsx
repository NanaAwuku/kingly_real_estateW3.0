import React, { useState, useEffect } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEthereum } from "../context/EthereumContext";

import logo from "../assets/png/logo-no-background.png";

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [connected, setConnected] = useState(false); // State variable for connection status
  const [walletAddress, setWalletAddress] = useState(""); // State variable for wallet address

  const { connectToMetaMask, provider, disconnectFromMetaMask } = useEthereum();

  const handleConnectClick = async () => {
    await connectToMetaMask(); // Connect to MetaMask when the button is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change the background and text color when scrolled down
        setScrolling(true);
      } else {
        // Reset to the default style when at the top
        setScrolling(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if MetaMask provider is available and an account is connected
    if (provider && provider.provider && provider.provider.selectedAddress) {
      setConnected(true);
      setWalletAddress(provider.provider.selectedAddress); // Set the wallet address
    } else {
      setConnected(false);
      setWalletAddress(""); // Reset wallet address when disconnected
    }
  }, [provider]);

  return (
    <nav
      className={`fixed top-0 w-full z-10 ${
        scrolling ? "bg-gray-50 text-white" : "bg-glass text-gray-800"
      }`}
    >
      <div>
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logo} className="w-16" alt="" />
            <span
              className={`text-4xl mr-4 ${
                scrolling ? "text-gray-800" : "text-gray-800"
              }`}
            >
              KinGly
            </span>
          </div>
          <div className="hidden md:block"> {/* Hide on small screens */}
            <ul className="flex space-x-4 items-center">
              <li>
                <Link
                  to="/"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/newProperty"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  Property
                </Link>
              </li>
              {connected && ( // Display the "Create" button only when connected
                <li>
                  <Link
                    to="/create"
                    className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                      scrolling ? "text-gray-800" : "text-gray-800"
                    }`}
                  >
                    Create
                  </Link>
                </li>
              )}
              <li>
                {connected ? (
                  // Display the "Disconnect" button when connected
                  <Button
                    onClick={disconnectFromMetaMask} // Call the disconnect function
                    className={`focus:outline-none bg-red-500 text-white rounded-full ${
                      scrolling ? "bg-red-950 text-white" : "text-white"
                    }`}
                  >
                    Disconnect
                  </Button>
                ) : (
                  // Display the "Connect" button when not connected
                  <Button
                    onClick={handleConnectClick}
                    className={`focus:outline-none bg-blue-500 text-white rounded-full ${
                      scrolling ? "bg-blue-950 text-white" : "text-white"
                    }`}
                  >
                    Connect
                  </Button>
                )}
              </li>
            </ul>
          </div>

          <div className="md:hidden"> {/* Show on small screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                scrolling ? "text-white" : "text-gray-800"
              }`}
              aria-label="Open menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="bg-white py-2 px-4 shadow">
            <li>
              <Link
                to="/"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                <FaHome className="mr-1" />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
