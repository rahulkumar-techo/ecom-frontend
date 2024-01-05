import React from "react";
import { PushSpinner, ClassicSpinner } from "react-spinners-kit";

function Loader() {
  return (
    <div className=" flex justify-center ">
      <PushSpinner size={70} color="orange" Loader={ClassicSpinner} />
    
    </div>
  );
}

export default Loader;
