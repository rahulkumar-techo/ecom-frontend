import React from "react";

import StoreMenuCard01 from "./StoreMenuCard01";
import StoreMenuCard02 from "./StoreMenuCard02";
function StoreMenu({className}) {
  return (
    <div className={`${className} py-5 md:w-[300px]`}>
      {/* card 1  shop by categories*/}
      <StoreMenuCard01/>
      {/* card 2 Filer */}
      <StoreMenuCard02 />
    </div>
  );
}

export default StoreMenu;
