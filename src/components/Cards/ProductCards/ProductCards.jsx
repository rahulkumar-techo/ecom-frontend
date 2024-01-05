import React from "react";
import { camera, speaker01 } from "../../../assets/popular";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
import WishlistIcon from "../../WishlistIcon/WishlistIcon";

function ProductCards({ className }) {
  return (
    <div
      className={` relative p-3 rounded-lg  flex flex-col  items-center
      hover:bg-yellow-200 hover:text-gray-600 transition delay-75 ease-in-out bg-gray-600
       `}
    >
      {/*===========wishList Heart ================*/}
      <WishlistIcon/>
      <small className=" absolute left-0 bg-green-700 py-1 rounded-lg px-1">
        35% off
      </small>
      <div className={` ${className}`}>
        {/* image */}
        <div className="   overflow-hidden w-52vh-52 ">
          <img src={speaker01} alt="" className=" image-full object-contain" />
        </div>

        {/* details============> */}
        <div>
          <small>brand </small>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <small>
            <span> 1200.5</span>{" "}
            <strike className="text-red-500">1234.090</strike>
          </small>

          {/* rating  */}
        </div>
      </div>
      <ReactStars
        count={5}
        size={16}
        isHalf={true}
        emptyIcon={<FaRegStar />}
        halfIcon={<FaStarHalfAlt />}
        fullIcon={<FaStar />}
        activeColor="#ffd700"
        color={"white"}
        edit={false}
        value={2}
      />

      <button className=" bg-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-700 hover:text-black transition delay-100 ">
        <Link href="#">Add to Cart</Link>
      </button>
    </div>
  );
}

export default ProductCards;
