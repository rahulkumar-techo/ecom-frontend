import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


function WishlistComponent({id}) {

  const [active, setActive] = useState(false)


  return (
    <div onClick={() => setActive(!active)}>
      {/* Active / inactive state */}
      {active ? <FaHeart className="text-red-700" /> : <CiHeart />}
    </div>
  );
}

export default WishlistComponent;
