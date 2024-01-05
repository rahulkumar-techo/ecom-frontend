import React, { useEffect, useState } from "react";
import StoreProductListCard from "./StoreProductListCard";
import Pagination from "./Pagination";
import { IoMdMenu } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import "../../stores.css";

function StoreProductList({ productApi }) {
  //
  const [shortCard, setShortCard] = useState("");
  const handleSize = (event, value) => {
    setShortCard(value);
  };

  const [page, setPage] = useState(1);



  return productApi.length > 0 ? (
    <div className=" ">
      <div className="md:mx-5 md:flex gap-5 justify-between my-5 backdrop-blur-xl p-3 rounded-lg  ">
        {/* left side */}
        <div className=" flex items-center gap-3 ">
          <h4 className=" font-bold">Short By</h4>
          {/* slect  */}
          <select
            className="select select-bordered  max-w-xs"
            defaultValue="best-selling"
          >
            <option value="best-selling" disabled>
              Best Selling
            </option>
            <option value="normal-apple">Normal Apple</option>
            <option value="normal-orange">Normal Orange</option>
            <option value="normal-tomato">Normal Tomato</option>
          </select>
        </div>

        {/*============ right side============= */}
        <div className=" flex items-center px-2 gap-1 flex-wrap  justify-center my-2 xs:hidden md:flex ">
          <input
            type="text"
            placeholder=" 21 product"
            className=" rounded-lg  py-1 "
            disabled
          />
          <div className=" flex  items-center   gap-5">
            <CgMenuGridO
              className="  md:text-4xl hover:bg-orange-600 rounded-lg"
              onClick={(e) => {
                handleSize(e, ` repeat(4,minmax(0,1fr))`);
              }}
            />
            <IoMdMenu
              className=" md:text-4xl transform rotate-90   hover:bg-orange-600 rounded-lg"
              onClick={(e) => {
                handleSize(e, " repeat(3,minmax(0,1fr))");
              }}
            />

            <HiMenuAlt4
              className=" md:text-4xl hover:bg-orange-600 rounded-lg"
              onClick={(e) => {
                handleSize(e, " repeat(2,minmax(0,1fr))");
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`  xl:grid-cols-4 grid sm:grid-cols-3 xs:grid-cols-1 xs:m-0  
      grid-cols-1 md:grid-cols-3  lg:grid-cols-4   xl:items-center 
      xs:gap-5   md:mt-5 md:ms-5 
 gap-5 
     
        `}
        style={{ gridTemplateColumns: shortCard }}
      >
        {/* image,brand,title,discount,price */}
        {productApi.slice(page * 10 - 10, page * 10).map((item, index) => {
          return (
            <StoreProductListCard
              key={index}
              image={item.thumbnail}
              // brand={brand}
              title={item.title}
              rating={item.rating}
              stock={item.stock}
              price={item.price}
              discountPercentage={item.discountPercentage}
              brand={item.brand}
              description={item.description}
              _id={item?.id}
            />
          );
        })}
      </div>
      {/* Pagination */}
      {productApi.length > 0 && (
        <Pagination
          page={page}
          fnPage={setPage}
          totaldata={productApi.length}
        />
      )}
    </div>
  ) : (
    <>
      <div>Product is Not found</div>
    </>
  );
}

export default StoreProductList;
