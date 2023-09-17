import React from "react";

const HeroSub = () => {
  return (
    <div className="card lg:card-side bg-gray-800 text-white shadow-xl h-screen w-full">
      <figure>
        <img
          src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSub;
