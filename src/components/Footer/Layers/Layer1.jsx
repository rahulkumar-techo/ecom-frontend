import React from "react";
import { FaNewspaper } from "react-icons/fa6";
function Layer1() {
  return (
    
      <div className=" flex justify-around px-30 flex-wrap py-5 gap-5">
        <div className=" flex gap-2">
          <FaNewspaper className=" text-4xl" />
          <h3>Signup for Newsletter</h3>
        </div>
        <div className=" border rounded-md flex">
        <input type="email" placeholder="your email" className="input input-bordered input-md w-full max-w-xs" />
        <button className="btn btn-outline btn-warning ">Subscribe</button>
        </div>
      </div>
    
  );
}

export default Layer1;
