import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import Section2Swiper from "./Section2Swiper";

function Section2({ className }) {
  return (
    <div className={` ${className} px-10 py-2 md:py-10`}>
      <div className=" sm:grid item-center md:justify-around py-5 sm:grid-cols-2  md:grid-cols-5 grid-cols-1 gap-3 hidden">
        {Items.map((item, i) => {
          return (
            <div
              key={i}
              className=" backdrop-blur-xl text-hov-icon card-hov p-5 rounded-xl"
            >
              {item.icon}
              <div>
                <h3>{item.title}</h3>
                <small>{item.subTitle}</small>
              </div>
            </div>
          );
        })}
      </div>

      {/* mobile  */}

      <Section2Swiper Items={Items} />
    </div>
  );
}

const Items = [
  {
    title: "Free Shipping",
    subTitle: "from all order over $100",
    icon: <FaShippingFast />,
  },
  {
    title: "Daily Surprise Offers",
    subTitle: "Save up to 25%",
    icon: <IoGiftSharp />,
  },
  {
    title: "Support 24/7",
    subTitle: "Shop with an expert",
    icon: <BiSupport />,
  },
  {
    title: "Affordable Price",
    subTitle: "Get factory direct Price",
    icon: <BiSolidOffer />,
  },
  {
    title: "Secure Payment",
    subTitle: "100% protected Payments",
    icon: <MdOutlinePayment />,
  },
];

export default Section2;
