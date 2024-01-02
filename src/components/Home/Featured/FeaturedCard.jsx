import { Swiper, SwiperSlide } from "swiper/react";
import uniqid from "uniqid";
import "swiper/css";
import "swiper/css/pagination";
import { FaDollarSign } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

import { Link } from "react-router-dom";
import WishlistComponent from "./WishlistComponent";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FeaturedCard({ FeaturedData }) {
  const capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const reduceText = (string) => {
    let screen= document.body.offsetWidth;
    if(screen <600 ){
      return string.length > 16 ? string.slice(0, 20) + "..." : string;
     
    }
     else return  string.length > 50 ? string.slice(0, 50) + "..." : string;
 
  };

  




  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
      {/* Item start */}
        {FeaturedData.map((item, i) => {
          return (
            <SwiperSlide
              key={uniqid()}
              className="py-5 shadow-md  rounded-lg  bg-brand hover:bg-slate-200 transition delay-75 ease-in-out text-black hover_over_smallMenuList overflow-hidden"
          
            >
              {/* discount in percenage  */}
              <small className=" absolute right-0 w-auto bg-yellow-600 rounded-lg px-1 top-0">
                {item.discount}
              </small>
              {/* discount end */}
              <div className=" flex flex-col items-center rounded-lg px-5  relative  p-2  md:w-full">
                <Link
                  to={""}
                  className="  px-5 overflow-hidden rounded-lg sm:w-full"
                >
                  <img src={item.image} alt="" className=" image-cover w-full" />
                </Link>
                <div className=" absolute top-0 left-0 text-2xl ">
                  <WishlistComponent id={i} />
                  {/* show menu list */}
                 <div className="smallMenuList ">
                 <FaShareAlt className=" text-md py-1"/>
                  <FaEye className=" text-md py-1"/>
                  <FaShoppingBag className="py-1"/>
                 </div>
                  
                </div>

                {/* wishlist end */}

                <div className=" flex flex-col md:gap-2 gap-1 break-words items-center">
                  <small className=" font-bold text-red-600 xs:text-[8px] sm:text-sm">
                    {capitalFirstLetter(item.brand)}
                  </small>
                  <h4 className=" break-words text-[10px] sm:text-sm md:text-md lg:text-lg xs:text-sm sm:text-md ">
                    {reduceText(item.title)}
                  </h4>
                 
                  <small className=" flex items-center">
                    <FaDollarSign className="font-bold " /> {""} 123.990
                  </small>
                </div>
              </div>
              <small className=" bg-green-600 flex items-center gap-1 font-bold p-[5px] absolute md:bottom-[5px] bottom-0 md:left-[5px] rounded-xl">
                    <span className=" text-white">{item.rating}</span>
                    <ReactStars
                      count={1}
                      size={16}
                      isHalf={true}
                      emptyIcon={<FaRegStar />}
                      halfIcon={<FaStarHalfAlt />}
                      fullIcon={<FaStar />}
                      activeColor="#ffd700"
                      color={"white"}
                      edit={false}
                    />
                    {/* Rating */}
                  </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
