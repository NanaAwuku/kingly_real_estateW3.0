import React from "react";
import core1 from "../assets/img/corev1.jpg";
import { Button } from "@material-tailwind/react";

const CoreValues = () => {
  return (
    <section className="bg-blue-950 p-28  h-full">
      <div className="container mx-auto h-full ">

      
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-24">
        <div>
          <img src={core1} alt="" className="w-full h-[600px]" />
        </div>
        <div>
          <div>
            <h3 className="text-3xl text-white   font-semibold mb-10">
              Efficiency. Transparency. Control.
            </h3>
            <span className="text-gray-200 mb-11">
              Kingle developed a platform for the Real Estate marketplace that
              allows buyers and sellers to easily execute a transaction on their
              own. The platform drives efficiency, cost transparency and control
              into the hands of the consumers. Towntor is Real Estate Redefined.
            </span>
            <p className="mt-2 text-gray-800 mb-11">
              We always want to help by providing the best services to you.
            </p>
            <Button
              className="focus:outline-none bg-white text-blue-950 rounded-full" 
            >
              Connect Wallet
            </Button>
          </div>
          {/* Accordion */}
        </div>
      </div>
      </div>
    </section>
  );
};

export default CoreValues;
