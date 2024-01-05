import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { brand01, brand02, brand04 } from "../../../assets/marquee";
import { FaHeart } from "react-icons/fa";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import WishlistIcon from "../../WishlistIcon/WishlistIcon";

function SpecialProductCard({ emptyErray }) {
  
  return (
    <>
      {emptyErray.map((item, index) => {
        return (
          <div
            className="grid sm:grid-cols-2 items-center justify-center border h-auto w-auto
             xs:grid-cols-1 bg-gray-50 text-black px-5 rounded-lg relative"
            key={uniqid()}
          >
          {/* discount */}

<small className=" absolute top-0 text-red-600 px-2 py-1 rounded-xl bg-green-200"> 35% off</small>

            {/* left side */}
            <div>
              <figure className=" border m-3 ">
                <img src={brand01} alt="" className=" image-full" />
              </figure>
              <figure
                className=" flex  gap-2 w-12 border sm:m-2"
              
              >
                <img src={brand04} alt="" />
                <img src={brand02} alt="" className=" border" />
              </figure>
            </div>

            {/* right side  */}
            <div className=" word-break tracking-tight antialiased relative">
           {/* wishlist */}
          <WishlistIcon/>
              <small>Brand</small>
              <h4> Lorem ipsum dolor sit amet.</h4>
              <ReactStars
                count={5}
                size={16}
                isHalf={true}
                emptyIcon={<FaRegStar />}
                halfIcon={<FaStarHalfAlt />}
                fullIcon={<FaStar />}
                activeColor="text-orange-800"
                color={"orange"}
                edit={false}
              />
              <div>
                123.90 <strike>12.45</strike>
              </div>
              {/* Days */}
              <div className="flex items-center gap-1">
                745 Days
                <div className=" flex items-center gap-1">
                  <span className=" rounded-full bg-green-600 p-1 w-7 h-7">
                    34
                  </span>
                  <span className=" rounded-full bg-green-600 p-1 w-7 h-7">
                    32
                  </span>
                  <span className=" rounded-full bg-green-600 p-1 w-7 h-7">
                    33
                  </span>
                </div>
              </div>
              {/* remaining Product */}
              <div>
                <div className=" flex flex-col py-1">
                  <small>item:5</small>
                  <progress
                    className="progress progress-success "
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
            
           <Link className="flex w-auto px-5 m-4 py-1 rounded-xl bg-gray-800 text-white break-words" to={"/cart"} >
            Add to cart
           </Link>
            
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SpecialProductCard;
