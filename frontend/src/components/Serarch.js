import React, { useState } from 'react'

import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'

import {RiSearch2Line} from "react-icons/ri";
import { useContext } from 'react';
import { HouseContest } from '../context/HouseContest';
const Serarch = () => {

  const {houses}= useContext(HouseContest); 
  // console.log(houses);

  return (
    <div className='px-[30px] py-6 w-[1120px] mx-32 flex absolute top-0 flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>

      <button className='bg-violet-700  hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center text-white items-center text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  )
}

export default Serarch