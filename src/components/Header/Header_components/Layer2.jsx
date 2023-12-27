import React, { useState } from "react";
import { logo } from "../../../assets";
import Searchbar from "./Searchbar";
import Progressbar from "./Progressbar";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

function Layer2() {
    const [toggler,setToggler]=useState(false);
  return (
    <div className="flex items-center justify-between px-6 xl:px-10 shadow-sm py-2">
      {/* LOGO */}
      <div>
        <img src={logo} alt="Logo" className="w-24" />
      </div>
      {/* Searchbar */}
      <Searchbar />
      {/* Progress Bar */}
      <Progressbar className ="hidden" />
    <div className=" md:hidden block md:gap-5 xl:gap-10 text-3xl" onClick={()=>{setToggler(!toggler)}}>
    {
        toggler ? <RiMenuFoldFill/>  :<RiMenuUnfoldFill/>
     }
    </div>
    </div>
  );
}

export default Layer2;
