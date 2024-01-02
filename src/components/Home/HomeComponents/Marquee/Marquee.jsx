import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import uniqid from "uniqid"

import {
  brand01,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand07,
  brand08,
} from "../../../../assets/marquee";

function Marquee() {
  return (
    <div className="px-10 md:py-10 py-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper md:px-20 "
      >
        <SwiperSlide>
          <Link to="/brand1" className=" ">
            <img src={brand01} alt="Brand 1" className=" xs:w-[80px] sm:w-[100px] " />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/brand2">
            <img src={brand02} alt="Brand 2" className=" xs:w-[80px] sm:w-[100px] "  />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/brand3">
            <img src={brand03} alt="Brand 3" className=" xs:w-[80px] sm:w-[100px] "  />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/brand4">
            <img src={brand04} alt="Brand 4" className=" xs:w-[80px] sm:w-[100px] "  />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/brand5">
            <img src={brand05} alt="Brand 5" className=" xs:w-[80px] sm:w-[100px] "  />
          </Link>
        </SwiperSlide>
        <SwiperSlide >
          <Link to="/brand6">
            <img src={brand06} alt="Brand 6" className=" xs:w-[80px] sm:w-[100px] " />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/brand7">
            <img src={brand07} alt="Brand 7"className=" xs:w-[80px] sm:w-[100px] "  />
          </Link>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default Marquee;
