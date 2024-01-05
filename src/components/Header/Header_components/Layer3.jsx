import React from "react";
import Selector from "./Selector";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";
function Layer3({className}) {
  const info = [
    { title: "HOME", icon: <IoHomeOutline />, link: "/" },
    { title: "OUR STORE", icon: <FaStore />, link: "/store" },
    { title: "BLOGS", icon: <RiPagesLine />, link: "/blogs" },
    { title: "CONTACT", icon: <MdConnectWithoutContact />, link: "/contact" },
  ];
  const categories = ["Phones", "iphones", "laptops"];
  // functionality
  return (
    <div className={` px-10 py-2 flex items-center sm:gap-3 xl:gap-20 ${className}`}>
      <div className=" flex items-center gap-4">
        <BiCategoryAlt className=" text-3xl" />
        <Selector items={categories} defaultval={"Categories"} />
      </div>
      <div className=" md:flex items-center hidden">
        {info.map((item, i) => {
          return (
            <Link
              key={i}
              className="px-5 text-hov-icon flex items-center gap-1"
              to={item.link}
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Layer3;
