import React from "react";
import { Link } from "react-router-dom";
function StoreMenuCard01() {

const hoverMenu01="border-b-2 border-transparent transition delay-75 hover:border-green-400 hover:text-green-700";

  return (
    <div className="  px-5 bg-slate-50 rounded-lg shadow-xl" >
      <h3 className=" border-b py-3 font-bold word-break border-gray-600 text-black">Shop By Categories</h3>
      <ul className=" leading-7 text-gray-700 font-bold"> 
        <li className=" ">
          <Link to={"/"} className={`${hoverMenu01}`}>Home</Link>
        </li>
        <li>
          <Link to={"/store"} className={`${hoverMenu01}`}>Our Store</Link>
        </li>
        <li>
          <Link to={"/blogs"} className={`${hoverMenu01}`}>Blogs</Link>
        </li>
        <li>
          <Link to={"/contact"} className={`${hoverMenu01}`}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default StoreMenuCard01;
