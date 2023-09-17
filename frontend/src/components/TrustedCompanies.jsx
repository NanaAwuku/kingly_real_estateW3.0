import React from 'react';


import Airbnb from '../assets/company/airbnb.svg';
import Amazon from '../assets/company/amazon.svg';
import Facebook from '../assets/company/facebook.svg';
import Google from '../assets/company/google.svg';
import Grab from '../assets/company/grab.svg';
import Netflix from '../assets/company/netflix.svg';

const TrustedCompanies = () => {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <h1 className="text-center mb-3 text-gray-400 font-medium">
        Trusted by 5,000+ Companies Worldwide
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <img className="h-7" src={Airbnb} alt="Google" />
        <img className="h-7" src={Amazon} alt="Netflix" />
        <img className="h-7" src={Facebook} alt="Airbnb" />
        <img
          className="h-7 transform translate-y-2"
          src={Google}
          alt="Amazon"
        />
        <img className="h-7" src={Grab} alt="Facebook" />
        <img className="h-7" src={Netflix} alt="Grab" />
      </div>
    </div>
  );
};

export default TrustedCompanies;
