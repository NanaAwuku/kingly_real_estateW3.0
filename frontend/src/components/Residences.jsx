import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const popularResidences = [
  {
    id: 1,
    name: "Luxury Villa",
    location: "Malibu, CA",
    price: "\$2,500,000",
    image: "luxury-villa.jpg",
  },
  {
    id: 2,
    name: "Beachfront Condo",
    location: "Miami Beach, FL",
    price: "\$1,200,000",
    image: "beachfront-condo.jpg",
  },
  {
    id: 3,
    name: "Mountain Chalet",
    location: "Aspen, CO",
    price: "\$3,800,000",
    image: "mountain-chalet.jpg",
  },
];

const Carousel = () => {
  return (
    <Swiper effect="fade" pagination>
      {popularResidences.map((residence) => (
        <SwiperSlide key={residence.id}>
          <div className="residence-card">
            {/* <img
              src={require(`../assets/images/${residence.image}`).default}
              alt={residence.name}
            /> */}
            <h3 className="residence-name">{residence.name}</h3>
            <p className="residence-location">{residence.location}</p>
            <p className="residence-price">{residence.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const PopularResidence = () => {
  return (
    <section className="popular-residences">
      <div className="container">
        <h2 className="section-title">Popular Residences</h2>
        <Carousel />
      </div>
    </section>
  );
};

export default PopularResidence;
