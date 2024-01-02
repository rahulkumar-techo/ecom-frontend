import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay:2000,disableOnInteraction:false
        }}
        breakpoints={{
          640: {
            Navigation:false,
            pagination:false
           
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className=""
      >
        {Items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={item.link} className=" relative">
                <img src={item.source} alt="" />
                <div className={`absolute top-[50%] z-10 ${item.className} p-3 rounded-xl overflow-hidden
                `}>
                  <h3 className=" font-bold ff-R text-xl ">
                    {item.title1}
                  </h3>
                  <h4>{item.subheading}</h4>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

// list of items
const Items = [
  {
    source:
      "https://fixthephoto.com/images/content/product-photography-backdrops.jpg",
    link: "#",
    title1: "Cool Bears",
    heading: "usa made beer ",
    subheading: ` start from ${"$"}${10.56} to ${"$"}${20.15}`,
    className: "text-gray-900 left-[45%] backdrop-blur-xl ",
  },
  {
    source:
      "https://studiomagenta.co.uk/app/uploads/2020/07/Onesta-Hero-Shot.jpg",
    link: "#",
    title1: "Natural cusmetic cream",
    heading: "",
    subheading: `from ${"$"}${12.98}to ${"$"}${40.98} `,
   
    className:"left-[40%] text-gray-300 shadow-xl backdrop-blur-xl"
  },
  {
    source:
      "https://www.webfuturestudio.com/uploads/user-uploads/image/image/4%20-%20Copy%201.png",
    link: "#",
    title1: "Gucci shoes",
    heading: "",
    subheading: `from ${"$"}${12.98}to ${"$"}${40.98} `,
    prices: ``,
    className:"left-[40%]  backdrop-blur-xl"
  },
  {
    source: "https://inspgr.id/app/uploads/2019/12/packaging-wwave-14.jpg",
    link: "#",
    title1: "Herbal Chai",
    heading: "",
    subheading: `from ${"$"}${12.98}to ${"$"}${40.98} `,
    prices: ``,
    className:"left-[40%] text-gray-800 shadow-xl backdrop-blur-xl"
  },
];
