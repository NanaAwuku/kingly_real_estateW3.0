import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/png/logo-color.png'

import { HouseContest } from "../context/HouseContest";
import { ImSpinner2 } from "react-icons/im";

import Property from "./Property";
import { Button } from "@material-tailwind/react";

const PropertyList = () => {
  const { houses, loading } = useContext(HouseContest);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }
  if (houses.length < 1) {
    return <>Sorry Page is Empty</>;
  }

  return (
    <section className="mt mx-auto flex flex-col">
      <div className="w-full h-40 flex justify-between items-center bg-blue-950">
        <img src={logo} className="w-14" alt="" />
        <h1 className="text-white text-3xl text-center px-52">
          Find Your Latest Apartment Here
        </h1>
        <Button className="bg-white text-blue-950">
           Connect Wallet
        </Button>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-col-2 lg:grid-cols-3 lg:gap-4">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <Property house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
