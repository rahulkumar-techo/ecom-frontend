import React from "react";

// ICONS
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";

function Breadcumb(props) {
  const { title } = props;
  return (
  
      <div className=" ">
        <p className=" flex items-center justify-center">
          <Link
            to={"/"}
            className=" flex items-center border-b-2 border-transparent hover:border-b-green-700"
          >
            Home
          </Link>
          <MdKeyboardArrowRight className="text-xl " />
          {title}
        </p>
      </div>
  );
}

export default Breadcumb;
