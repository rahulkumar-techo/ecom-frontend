import React from "react";
import SpecialProductCard from "./SpecialProductCard";
import { brand02, brand03, brand06 } from "../../../assets/marquee";
import { Link } from "react-router-dom";
function SpecialProduct() {
  return (
    <>
      <div className=" my-10  px-3">
        <Link to={""} className=" font-bold text-xl  ">
          Special Offers
        </Link>
        <div
          className=" lg:mx-10 xs:mx-2  my-5 rounded-lg md:pt-10  md:px-10 overflow-hidden
         xs:grid-cols-2 grid-cols-2 grid lg:grid-cols-3 items-center
          justify-center gap-5  bg-slate-100 "
        >
          <SpecialProductCard emptyErray={emptyErray} />
        </div>
      </div>
    </>
  );
}

const emptyErray = [
  {
    src: brand03,
    brand: "",
    rating: 4.3,
    price: 23,
    oldPrice: 12,
    days: 456,
    timer: "",
    avilableItem: 2,
    link: "",
    image: [
      {
        src1: brand06,
      },
      {
        src2: brand02,
      },
    ],
  },
  {
    src: brand03,
    brand: "",
    rating: 4.3,
    price: 23,
    oldPrice: 12,
    days: 456,
    timer: "",
    avilableItem: 2,
    link: "",
    image: [
      {
        src1: brand06,
      },
      {
        src2: brand02,
      },
    ],
  },
  {
    src: brand03,
    brand: "",
    rating: 4.3,
    price: 23,
    oldPrice: 12,
    days: 456,
    timer: "",
    avilableItem: 2,
    link: "",
    image: [
      {
        src1: brand06,
      },
      {
        src2: brand02,
      },
    ],
  },
  {
    src: brand03,
    brand: "",
    rating: 4.3,
    price: 23,
    oldPrice: 12,
    days: 456,
    timer: "",
    avilableItem: 2,
    link: "",
    image: [
      {
        src1: brand06,
      },
      {
        src2: brand02,
      },
    ],
  },
];

export default SpecialProduct;
