import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CategoryCard from "../CategoryCard/CategoryCard";
import {
  appliences,
  electronics,
  fashions,
  home,
  mobile,
  toys_baby,
  two_Wheeler,
  flight,
} from "../../../assets/products";

function ItemList() {
  return (
    <div className="md:px-10 md:py-10 px-3 py-2  overflow-hidden md:overflow-visible">
      <h2 className="py-3 font-bold family-1 kanit">Categories</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {category_data.map((item, index) => (
          <SwiperSlide key={index} className="bg-hov rounded-lg">
            
            <CategoryCard
              banner={item.banner}
              title={item.title}
              discountPercentage={item.discountPercentage}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const category_data = [
  {
    banner: electronics,
    title: "Electonics",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: mobile,
    title: "Mobile",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: fashions,
    title: "Fashions",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: home,
    title: "Home",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: appliences,
    title: "Appliences",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: flight,
    title: "Travel",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: toys_baby,
    title: "Beauty , Toys & More",
    discountPercentage: `${15}`,
    link: "",
  },
  {
    banner: two_Wheeler,
    title: "Two Wheeler",
    discountPercentage: `${15}`,
    link: "",
  },
];

export default ItemList;
