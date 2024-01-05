import React from "react";
import { Avatar } from "../../../assets/userComp";
import ReactStars from "react-rating-stars-component";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemsToWishlist } from "../wishSlice";

function wishlistCard({
  image,
  title,
  discountPercentage,
  rating,
  price,
  brand,
  description,
}) {
  const perfectPrice = (price) => {
    price = price.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(price)) price = price.replace(pattern, "$1,$2");
    return price;
  };
  const reduceWords = (string) => {
    const words = string.split(" ");
    if (words.length > 7) {
      const truncatedWords = words.slice(0, 7);
      return truncatedWords.join(" ") + "...";
    } else {
      return string;
    }
  };

  let discountPrice = Math.round(
    price * ((100 - Number(discountPercentage)) / 100)
  );

  // delete items from wishlists
  const wishlistItems = useSelector(
    (state) => state.wishlists_reducer.wishlistItems
  );

  
  const dispatch = useDispatch(wishlistItems);
  const HandleDeletewishlist = (event) => {
    dispatch(removeItemsToWishlist(wishlistItems));
  };

  // funacalities
  // Jsx
  return (
    <div className=" bg-gray-300 rounded-xl">
      <div className="  md:flex px-2 gap-3 border my-5 py-3 xs:flex:col ">
        <figure className=" max-w-52 max-h-52 flex items-center justify-center">
          <img src={image} alt="" className=" image-full object-contain" />
        </figure>
        {/* ==========descriptions================ */}
        <div className=" relative">
          <small>{brand}</small>
          {/* delete 🚮 item */}
          <MdDelete
            className=" absolute right-0 bottom-0 text-xl text-gray-600 hover:scale-110 transition delay-75"
            onClick={()=>{HandleDeletewishlist(wishlistItems)}}
          />
          <h5>
            <span className="">{reduceWords(description)}</span>
          </h5>
          <div className=" flex items-center">
            <ReactStars
              count={5}
              size={16}
              isHalf={true}
              emptyIcon={<FaRegStar />}
              halfIcon={<FaStarHalfAlt />}
              fullIcon={<FaStar />}
              activeColor="#ffd700"
              color={"gray"}
              edit={false}
              value={rating ? rating : 1}
            />
            <span> ( 54 )</span>
          </div>
          <h4 className=" md:flex items-center gap-3">
            <div className=" flex items-center text-black font-bold">
              <span>
                <FaIndianRupeeSign />
              </span>
              <span>{`${perfectPrice(price)}`}</span>
            </div>
            <strike className=" flex items-center">
              <FaIndianRupeeSign className=" line-through" />
              <span>{`${perfectPrice(discountPrice)}`}</span>
            </strike>
            <span className=" text-green-600">{discountPercentage}% off </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default wishlistCard;
