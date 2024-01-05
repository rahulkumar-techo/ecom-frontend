import React from "react";
import Swiper from "./HomeComponents/Swiper";
import { Link } from "react-router-dom";
import Section2 from "./HomeComponents/Section2/Section2";
import HomeItemList from "./HomeItemList";
import Marquee from "./HomeComponents/Marquee/Marquee";
import Blog from "./HomeComponents/Blog/Blog";
import Featured from "./Featured/Featured";
import SpecialProduct from "./SpecialProduct/SpecialProduct";
import PopularProduct from "./PopularProduct/PopularProduct";
import FamousProduct from "./FamousProduct/FamousProduct";
function index() {


  return (
    <>
      <section
        className="py-6  md:pt-[180px] pt-[170px] xs:pt-[110px] overflow-x-hidden"
      
      >
        <div className=" grid md:grid-cols-2 px-10 md:gap-10 gap-5  grid-cols-1 ">
          <div>
            <Swiper />
          </div>
          {/* Right side  */}
          <h3 className=" text-center font-bold ff-R md:hidden">{`${" Top Trending products"}`}</h3>
          <div className=" grid grid-cols-2 gap-2  overflow-hidden ">
            <div className="   rounded-xl overflow-hidden">
              <Link>
                <img
                  src="https://cdn.dribbble.com/users/3906861/screenshots/11064891/04_4x.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="   rounded-xl overflow-hidden">
              <Link>
                <img
                  src="https://cdn.dribbble.com/users/3906861/screenshots/11064891/04_4x.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="   rounded-xl overflow-hidden">
              <Link>
                <img
                  src="https://cdn.dribbble.com/users/3906861/screenshots/11064891/04_4x.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="   rounded-xl overflow-hidden">
              <Link>
                <img
                  src="https://cdn.dribbble.com/users/5780160/screenshots/18046091/media/28ebab5cf8daf59f29d117d7485d4e2f.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        {/* other part of the home page */}
      </section>
      {/* SECTION 2 SHIPPING ORDER ETC... */}
      {/* PAYMENT SECTION SHIPPING */}
      <Section2 />
      {/* // Section ITEMS LISTS*/}
      <HomeItemList />
      <Marquee/>
      <Featured/>
      <Blog/>
      <SpecialProduct/>
      {/* Popular Products  */}
      <PopularProduct/>
      <FamousProduct/>
    </>
  );
}

export default index;
