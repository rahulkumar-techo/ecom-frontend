import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import StoreProductTages from "./StoreProductTages";
import ProductCards from "../../../../components/Cards/ProductCards/ProductCards";

function StoreMenuCard02() {
  //price sortiing

  const [pricevalue, setPriceValue] = useState({ min: 100, max: 1000 });

  const priceSorting = (e) => {
    const { name, value } = e.target;
    setPriceValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const currentColor = (e, item) => {
    console.log(item);
  };

  return (
    <div className={` px-5 mt-5 rounded-lg shadow-xl py-5`}>
      <h3>Filter By</h3>
      <div className="form-control">
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text"> In Stock (12)</span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">Out of Stock (123) </span>
        </label>
      </div>

      {/* price short */}
      <div>
        <h4>Price</h4>
        <div className=" flex gap-3 flex-col px-1">
          <label htmlFor="min_val">min:</label>
          <input
            onChange={priceSorting}
            type="number"
            name="min"
            id="min_val"
            className="  rounded-lg ps-1"
            value={pricevalue.min}
          />

          <label htmlFor="max_val">max:</label>
          <input
            onChange={priceSorting}
            type="number"
            name="max"
            id="max_val"
            value={pricevalue.max}
            className="  rounded-lg ps-1"
          />
        </div>
      </div>
      {/* short by color */}

      <div className=" py-10 flex flex-wrap gap-3 bg-gray-200 rounded-lg my-5 px-3">
        {color.map((item, i) => {
          return (
            <FaCircle
              onClick={(e) => currentColor(e, item)}
              key={i}
              style={{ color: item }}
              className=" text-4xl hover:scale-105 transition delay-75 cursor-pointer"
            />
          );
        })}
      </div>
      {/* <==========size==========> */}
      <div className="form-control">
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">s (10) </span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">M (13) </span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">L(10) </span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">XL (5) </span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text">XXL(8) </span>
        </label>
        <label className="cursor-pointer label">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span className="label-text"> XXXL(1)</span>
        </label>
      </div>
      {/*  */}
      {/* Product tages */}
      <div className=" my-10 shadow-lg bg-gray-400 text-gray-900 p-3 rounded-md">
        <h3 className=" py-5 ">Product Tags</h3>
        <div className=" flex flex-wrap gap-2">
          <StoreProductTages title={"shopping"} />
          <StoreProductTages title={"homeremidis"} />
          <StoreProductTages title={"shopping"} />
          <StoreProductTages title={"shopping"} />
        </div>
        
      </div>
      {/* Random Product Card */}
      <div>

        <h3 className="py-5">Random Products</h3>
        <div className=" flex flex-col gap-5">
      <ProductCards className={"flex gap-2"}/>
      <ProductCards className={"flex gap-2"}/>
    

        </div>
      </div>
    </div>
  );
}
// provide color
const color = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "white",
  "black",
  "cyan",
  "gray",
];

export default StoreMenuCard02;
