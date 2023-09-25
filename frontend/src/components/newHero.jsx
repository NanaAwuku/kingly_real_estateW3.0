import React from "react";
import HeroPic from "../assets/img/hero1.jpg";
import { FaPlay, FaSearch } from "react-icons/fa";

const NewHero = () => {
  return (
    <section className="relative md:pt-24 w-full bg-gradient-to-b from-slate-50 dark:from-slate-800 to-transparent">
      <div className="text-center">
        <h1 className="font-bold lg:leading-normal leading-normal mt-24 lg:mt-2 text-xl lg:text-5xl text-left lg:text-center mb-6">
          Build wealth with real estate <br />
          <span className="">one brick</span> at a time
        </h1>

        <p className="text-slate-400 mx-auto text-xl max-w-xl">
          Invest in rental properties without getting locked in (or out). Buy
          just a fraction of a property and collect your first rent payment
          later today.
        </p>
      </div>
      <div className="flex md:mx-28 flex-col relative mt-10">
        <img
          src={HeroPic}
          className="rounded-xl shadow-md dark:shadow-gray-700"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="/"
            className="h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-sky-400"
          >
            <FaPlay size={36} />
          </a>
        </div>
        <div className="absolute -top-5 w-full flex items-center justify-center">
          <div className="relative rounded-full overflow-hidden bg-white bg-opacity-70">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100  w-[700px] p-4 pl-12 pr-10  placeholder-slate-500 text-black dark:text-white outline-none"
            />

            <div className="absolute inset-y-0 left-4 flex items-center">
              <FaSearch className="text-gray-500" />
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className=" bg-blue-500 text-lg text-white px-6 py-3 rounded-full focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
