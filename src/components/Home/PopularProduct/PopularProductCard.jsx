import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import uniqid from "uniqid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { speaker01 } from "../../../assets/popular";
import ProductCards from "../../Cards/ProductCards/ProductCards";

export default function PopularProductCard({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200:{
            slidesPerView: 3,
            spaceBetween: 50, 
          }
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={uniqid()}>
            {/* Product card */}
              <ProductCards
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
