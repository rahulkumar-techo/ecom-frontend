import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import uniqid from "uniqid";

function Rating({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let num = index + 0.5;
    return (
      <span key={uniqid()}>
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-600" />
        ) : stars >= num ? (
          <FaStarHalfAlt className="text-yellow-600" />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return <div className="flex gap-1 text-[12px] sm:text-sm md:text-md">{ratingStar}</div>;
}

export default Rating;
