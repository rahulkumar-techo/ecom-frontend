import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemsToWishlists } from "../../pages/WishlistPage/wishSlice";


function WishlistIcon({ left, product }) {


  const [wishlist, setWishlist] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();
  const handleWishlist = () => {
    // Simulate an asynchronous operation with a delay
    setSpinner(true);

    //  Saving Data 
      dispatch(addItemsToWishlists(product));
      setSpinner(false);
      setWishlist(!wishlist);
    
  };

  return (
    <div className={`absolute ${left ? "left-2" : "right-2"}`}>
      <button
        className={`${wishlist ? "text-red-500" : ""} text-3xl`}
        onClick={handleWishlist}
        aria-label={wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {spinner ? (
          <ClapSpinner size={30} frontColor="red" backColor="red" />
        ) : wishlist ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
}

export default WishlistIcon;
