import React, { useState, useEffect } from "react";
import { FaHome, FaBuilding, FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import logo from "../assets/png/logo-no-background.png";

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <div>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link
                  to="/"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  <FaHome className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/market"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  <FaBuilding className="mr-1" />
                  Market
                </Link>
              </li>
              <li>
                <Link
                  to="/listing"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={`flex items-center text-[20px] px-2 py-1 hover:text-gray-300 ${
                    scrolling ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  <FaUser className="mr-1" />
                  Profile
                </Link>
              </li>
              <li>
                <Button
                  className={`focus:outline-none bg-blue-500 text-white rounded-full ${
                    scrolling ? "bg-blue-950 text-white" : "text-white"
                  }`}
                >
                  Connect Wallet
                </Button>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
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
            <li>
              <Link
                to="/properties"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                <FaBuilding className="mr-1" />
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/buy"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                to="/sell"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                to="/listing"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                Listing
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`flex items-center py-1 hover:bg-gray-200 ${
                  scrolling ? "text-white" : "text-gray-800"
                }`}
              >
                <FaUser className="mr-1" />
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
