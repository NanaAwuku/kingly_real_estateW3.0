import React from "react";
import { Button } from "@material-tailwind/react";

const GoldSection = () => {
  return (
    <section className="h-full bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col text-center px-[400px]">
        <h1 className="text-blue-950 font-bold text-6xl mb-6 mt-20">
          Everyone deserves to own something real
        </h1>
        <p className="text-gray-500 text-[20px] mb-10">
          Learn from our community building wealth for themselves and their
          families.
        </p>
      </div>

      <div className="flex gap-x-6 mb-10 items-center border justify-center rounded overflow-hidden ">
        <div class="max-w-sm rounded overflow-hidden border shadow-lg">
          <div class="px-6 py-4">
            <p className="text-gray-800 mb-4 text-2xl">
              " What could be better ? Immediate attractive yields and liquidity
              for a private real asset.. amazing!"
            </p>
            <p class="text-gray-700 text-2xl">
              "Truly revolutionary approach to real estate investing for
              mainstream"
            </p>
            <p class="text-gray-700 text-base">Reinvest = MaGic</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <p className="text-gray-800 mb-4 text-2xl">
              " Before the week is up I will be at $200 in rental Home income on
              Kingly"
            </p>
            <p class="text-gray-800 mb-4 text-2xl">
              count wait to see the compounding of this account
            </p>
            <p class="text-gray-800 mb-4 text-2xl">Reinvest = MaGic</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <p className="text-gray-800 mb-4 text-2xl">
              " Love the company and the concept - I've been in since the very
              first property - Kingly"
            </p>
            <p class="text-gray-800 mb-4 text-2xl">
              I just dont think this is cool, I think its the future of real
              estate
            </p>
            <p class="text-gray-800 mb-4 text-2xl">Reinvest = MaGic</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
      <Button className="focus:outline-none bg-blue-950 text-white w-[200px] mt-10 rounded-full">
        Connect Wallet
      </Button>

      <div className="h-[600px] container mx-auto rounded-2xl justify-center mt-10 bg-blue-950 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[4rem] px-[100px] text-center text-white mt-5">
            Start building wealth for wherever your journey takes you
          </p>
          <p className="text-gray-500 text-2xl text-center mt-4">
            Don’t get left behind. Start investing in fractional real estate.
          </p>
          <Button className="focus:outline-none bg-white text-blue-950 w-[200px] mt-10 rounded-full flex items-center">
            View Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoldSection;
