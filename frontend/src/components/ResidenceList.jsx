import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HouseContest } from "../context/HouseContest";
import { ImSpinner2 } from "react-icons/im";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Residences from "./Residences";

const ResidenceList = () => {
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
    <section className="mt-5 mx-auto w-full">
      <div className="container mx-auto relative">
        {/* <SlideNextButton/> */}
        <div className="">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {houses.map((house, index) => {
                return (
                  <Link to={`/property/${house.id}`} key={index}>
                    <Residences house={house} />
                  </Link>
                );
              })}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ResidenceList;

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <div className="gap-4 flex items-center absolute right-4 top-0">
      <button
        className="text-white bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-full p-2"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="text-white bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-full p-2"
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
