import React, { useContext, createContext, useEffect, useState } from "react";

import { housesData, countyData } from "../data";

export const HouseContest = createContext();

const HouseContestProvider = ({ children }) => {
  const [houses, setHousesData] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type(any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    })
    // console.log(allCountries)
    const uniqueCountries = ['Location (any)', ... new Set(allCountries)]
    setCountries(uniqueCountries)
  },[])

  // const HandleClick =()=>{
  //   console.log(country, property, price )
  // }
  return (
    <HouseContest.Provider
      value={{
        country,
        setCountry,
        property,
        setProperty,
        countries,
        price,
        setPrice,
        loading,
        setLoading,
        houses,
        setHousesData,
      }}
    >
      {children}
    </HouseContest.Provider>
  );
};

export default HouseContestProvider;
