import React from "react";
import { Link } from "react-router-dom";
import Selector from "./Selector";
import { BiCategoryAlt } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { logo } from "../../../assets";
// menu
import { RiMenuUnfoldFill } from "react-icons/ri";

function Mobile({ fnToggler, toggle }) {
  const lists = [
    { title: "Home", icon: <SiHomebridge />, link: "/" },
    { title: "About", icon: <IoPerson />, link: "/about" },
    { title: "Blogs", icon: <GrArticle />, link: "/blogs" },
    { title: "Store", icon: <FaStore />, link: "/store" },
    { title: "Contact", icon: <MdContacts />, link: "/contact" },
    { title: "Coupon", icon: <RiCoupon2Fill />, link: "/coupon" },
    { title: "My Cart", icon: <BsCart4 />, link: "cart" },
    { title: "My wishlist", icon: <FaRegHeart />, link: "/wishlist" },
    { title: "My Account", icon: <IoMdPerson />, link: "/account" },
    { title: "My notification", icon: <IoMdNotifications />, link: "/notification" },
  ];

  const categories = ["Phones", "iPhones", "Laptops"];

  return (
    <div className="text-black absolute right-0 top-0 h-screen w-screen md:hidden flex justify-between rounded-s-xl px-0">
    <button
      className="sm:w-[70vh] w-[50%] backdrop-blur-sm"
      onClick={() => {
        fnToggler(!toggle);
      }}
    ></button>
  
    <div>
      {/* upper part */}
      <div className="bg-brand sm:w-[50vh]  sm:px-10 px-10">
        <div className="flex justify-between px-3 py-5 items-center">
          <img src={logo} alt="Logo" className="w-16 md:w-20" />
          <RiMenuUnfoldFill
            onClick={() => {
              fnToggler(!toggle);
            }}
            className="text-2xl hover:text-orange-800"
          />
        </div>
        <ul className="bg-brand h-screen ">
          {/* lists */}
          {lists.map((item, i) => (
            <li key={i} className="card-hov">
              <Link
                to={item.link}
                className="flex items-center text-[18px] gap-3 py-2"
                onClick={() => {
                  fnToggler(!toggle);
                }}
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
          <hr className="my-2" />
          <div className="flex items-center py-2">
            <BiCategoryAlt className="text-xl" />
            <Selector
              defaultval={"Categories"}
              items={categories}
              className={"bg-transparent text-md"}
            />
          </div>
        </ul>
      </div>
    </div>
  </div>
  
  );
}

export default Mobile;
