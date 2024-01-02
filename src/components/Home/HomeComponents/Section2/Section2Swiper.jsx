import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination ,Autoplay} from "swiper/modules";

export default function Section2Swiper({ Items }) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // centeredSlides={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper sm:hidden block"
        color=""
      >
        {Items.map((item, i) => {
          return (
            <SwiperSlide
              className="  backdrop-blur-xl text-hov-icon card-hov p-5 rounded-xl flex flex-col   item-center justify-center"
              key={i}
            >
              <div>{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <small>{item.subTitle}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
