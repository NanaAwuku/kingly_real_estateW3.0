import React from 'react';


import Prologis from '../assets/company/prologis.png';
import Reality from '../assets/company/realty.png';
import Tower from '../assets/company/tower.png';
import Equinix from '../assets/company/equinix.png';

const TrustedCompanies = () => {
  return (
    <div className=" h-20  w-full">
      <div className=" flex justify-around items-center gap-x-4">
        <img className="h-20 w-24" src={Prologis} alt="Prologis" />
        <img className="h-20 w-24" src={Reality} alt="Reality" />
        <img className="h-20 w-24" src={Tower} alt="Tower" />
        <img
          className="h-20 w-24"
          src={Equinix}
          alt="Equinix"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
