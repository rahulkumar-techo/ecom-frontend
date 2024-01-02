import React from "react";
import { Link } from "react-router-dom";

       
function CategoryCard({ banner, title, discountPercentage,link }) {
  return (
   <>
    <Link to={link}>
    <div className=" border-gray-300 rounded p-4 shadow-md max-h-[153.6px]  hover:bg-yellow-200 ">
      <div className="flex justify-center items-center">
        <img
          src={banner}
          alt={title}
          className=" h-auto object-contain rounded w-16"
        />
      </div>
      <div className="mt-3 flex flex-col flex-wrap justify-center items-center">
        <p className="md:text-lg font-semibold text-[8px] sm:text-sm ">{title}</p>
        <small>
          <span className="text-green-500 sm:text-sm md:text-md text-[7px]">{discountPercentage}% off</span>
        </small>
      </div>
    </div>
    </Link>
   </>
  );
}

export default CategoryCard;
