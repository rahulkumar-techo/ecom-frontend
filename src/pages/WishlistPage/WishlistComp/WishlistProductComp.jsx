import React, { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import WishlistPagination from "./WishlistPagination";
import { CiMenuKebab } from "react-icons/ci";
import { useSelector } from "react-redux";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearItemsToWishlists } from "../wishSlice";

function WishlistProductComp() {
  const [page, setPage] = useState(1);
  const [wishMenu, setWishmenu] = useState(false);

  const { wishlistItems } = useSelector((state) => {
    return state.wishlists_reducer;
  });
  const dispatch = useDispatch();
const handleClearWishlists =(event)=>{
  dispatch( clearItemsToWishlists(wishlistItems))
setWishmenu(!wishMenu)


}
// JSX   COMPONENTS
const optionsmenu = (
  <div className=" backdrop-blur-md absolute rounded-xl right-2 px-5 py-2 text-2xl">
    <button className=" flex items-center hover:text-red-600 cursor-pointer" onClick={handleClearWishlists} >
      <MdOutlineDeleteSweep className="text-3xl" />
      <span> Delete All</span>
    </button>
  </div>
);
  // JSX =================================================>
  return (
    <div className=" w-full relative">
      <div className=" flex justify-between px-1 items-center">
        <h3 className=" border py-4 px-5">My WishList ( 59 )</h3>
        {/*======== menu ==========*/}
        <CiMenuKebab
          className=" text-xl cursor-pointer"
          onClick={() => {
            setWishmenu(!wishMenu);
          }}
        />
      </div>

      {wishMenu && optionsmenu}

      {/* lists */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1  gap-4 py-10  ">
        {/* Wishlist Card */}
        {wishlistItems.slice(page * 10 - 10, page * 10).map((item, i) => {
          return (
            <WishlistCard
              key={i}
              image={item.image}
              // brand={brand}
              title={item.title}
              rating={item.rating}
              stock={item.stock}
              price={item.price}
              discountPercentage={item.discountPercentage}
              brand={item.brand}
              description={item.description}
            />
          );
        })}
      </div>
      <WishlistPagination
        fnPage={setPage}
        page={page}
        totaldata={wishlistItems.length}
      />
    </div>
  );
}



export default WishlistProductComp;
