import React from "react";
import FeaturedCard from "./FeaturedCard";
import { brand05 } from "../../../assets/marquee";
import { useEffect, useState } from "react";
function Featured() {

  return (
    <>
      <div className=" px-3 sm:px-10 py-5">
      <h3 className=" md:text-lg text-lg font-bold break-words leading-[4rem] lg:text-lg xl:text-3xl pb-5" > Featured Collections</h3>
        <FeaturedCard FeaturedData={FeaturedData} />
      </div>
    </>
  );
}

const FeaturedData = [
  {
    image: brand05,
    brand: "jio",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 1.3,
    price: 123.45,
    wishlist:true,
    discount:`${10}%`
  },
  {
    image: brand05,
    brand: "samsung",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.5,
    price: 123.45,
    wishlist:true,
    discount:`${30}%`
  },
  {
    image: brand05,
    brand: "lava",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 3.1,
    price: 123.45,
    wishlist:false
  },
  {
    image: brand05,
    brand: "brandi",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.5,
    price: 123.45,
    wishlist:true,
    discount:`${50}%`
  },
  {
    image: brand05,
    brand: "mursadis",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.3,
    price: 123.45,
    wishlist:false
  },
  {
    image: brand05,
    brand: "tata",
    title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    rating: 4.4,
    price: 123.45,
    wishlist:true
  },
];

export default Featured;
