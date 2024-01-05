import React from "react";
import { Avatar } from "../../../assets/userComp";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function WishlistMenuComp() {
 
  return (
    <div className=" flex flex-col gap-5 text-gray-950">
      {/* customer */}
      <div className="flex gap-2 bg-gray-200 text-black item-center py-2 px-5  rounded-xl">
        <div className=" w-16 overflow-hidden">
          {/* replace image by api userImage */}
          <img src={Avatar} alt="Avatar" className=" image-full object-fill" />
        </div>

        <div>
          <small>Hello,</small>
          <h4>R-Ecom Customer</h4>
        </div>
      </div>

      {/* order tracker */}
      
    </div>
  );
}

export default WishlistMenuComp;
