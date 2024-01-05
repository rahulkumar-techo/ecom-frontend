import React from "react";
import FamousProductCard from "./FamousProductCard";
import {

  camera,
  headphone,
  homeapp,
  laptop,
} from "../../../assets/popular";

function FamousProduct() {
  return (
    <div className="xs:px-3 md:px-10 my-10  xs:text-md md:text-lg">
      <h3 className=" lg:text-3xl py-5 ">Famous Products</h3>

      {/* FamousProduct Card */}

      <FamousProductCard data={data} />
    </div>
  );
}

const data = [
  {
    categories: "SPEAKERS",
    title: " Smart Speakers series 7",
    price: ` ${12.33}`,
    price2: ` ${60.33}`,
    image: headphone,
    style: " bg-black text-white border-none",
  },
  {
    categories: "SPEAKERS",
    title: " Smart Speakers series 7",
    price: ` ${12.33}`,
    price2: ` ${70.33}`,
    image: laptop,
    style: " bg-white",
  },
  {
    categories: "SPEAKERS",
    title: " Smart Speakers series 7",
    price: ` ${12.33}`,
    price2: ` ${32.33}`,
    image: homeapp,
    style: " bg-white",
  },
  {
    categories: "SPEAKERS",
    title: " Smart Speakers series 7",
    price: ` ${12.33}`,
    price2: ` ${125.33}`,
    image: camera,
    style: " bg-white",
  },
];
export default FamousProduct;
