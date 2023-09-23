import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HouseContest } from "../context/HouseContest";
import { ImSpinner2 } from "react-icons/im";

import Property from "./Property";

const PropertyList = () => {
  const { houses, loading } = useContext(HouseContest);
  
  if(loading){
    return(
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    )
  }
  if(houses.length<1){
    return(<>Sorry Page is Empty</>)
  }

  return (
    <section className="mt-20 mx-auto">
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
