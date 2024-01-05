import React from "react";
import PopularProductCard from "./PopularProductCard";
import {
  camera,
  headphone,
  catbanner02,
  catbanner03,
  catbanner04,
  laptop,
  speaker01,
  speaker_th,
  homeapp,
  ai_speaker,
} from "../../../assets/popular";

function PopularProduct() {
  return (
    <div className=" px-2">
      <h3 className=" lg:text-3xl  text-lg font-bold font-roboto p-5 "> Our Popular Products</h3>

      <div className=" md:px-10 xs:px-5 px-3 lg:flex lg:gap-5 items-center bg-gray-400 md:py-4 rounded md:mx-5 mx-1 py-3 ">
        {/* left */}
        <div className=" flex justify-around gap-3  md:h-auto lg:py-0  py-2">
          {/* menus */}
          <ul
            className=" flex flex-col gap-5 lg:min-h-[300px] xl:min-h-[400px] xl:min-w-[200px] md:px-5 
         lg:auto xs:min-w-32 xs:text-[10px] sm:text-lg sm:w-[300px]  min-w-auto 
          bg-slate-600 rounded-lg py-2 
          min-h-[239px] 
          xs:ps-3
          ps-2
          "
          >
            <li className=" flex items-center  gap-4 hover:bg-yellow-200 hover:text-gray-800 transition delay-75 ease-in-out rounded-xl ">
              <span className=" w-10 h-10 overflow-hidden rounded-md">
                <img src={headphone} alt="" className=" image-full w-10 h-10" />
              </span>
              <span> Smart watch</span>
            </li>
            <li className=" flex items-center gap-4 hover:bg-yellow-200 hover:text-gray-800 transition delay-75 ease-in-out rounded-xl ">
              <span className=" w-10 h-10 overflow-hidden rounded-md">
                <img
                  src={ai_speaker}
                  alt=""
                  className=" image-full w-10 h-10"
                />
              </span>
              <span> Speaker</span>
            </li>
            <li className=" flex items-center gap-4 hover:bg-yellow-200 hover:text-gray-800 transition delay-75 ease-in-out rounded-xl ">
              <span className=" w-10 h-10 overflow-hidden rounded-md">
                <img src={laptop} alt="" className=" image-full w-10 h-10" />
              </span>
              <span> Laptop</span>
            </li>
          </ul>
          {/* right */}
          <div
            className=" rounded-xl overflow-hidden md:px-5 relative lg:min-h-[300px]
         // hover=============>
          hover:bg-yellow-300 hover:text-gray-600 transition delay-75 ease-in-out 
         bg-gray-600 p-[3px] sm:px-5"
          >
            <img src={ai_speaker} alt="" className=" image-full rounded-xl" />
            {/* descriptions */}
            <div className="absolute lg:bottom-2 sm:bottom-2 sm:text-bold text-gray-900  xs:top-2 px-3 top-2 ">
              <small>15% OFF</small>
              <h3 className=" font-bold md:leading-10 break-words sm:text-xl ">
                Home Speaker
              </h3>
              <small>From $399 or $16.62/mo. from 24 mo.*</small>
            </div>
          </div>
        </div>
        <PopularProductCard data={data} />
      </div>
    </div>
  );
}

const data = [1, 2, 3, 4, 5];

export default PopularProduct;
