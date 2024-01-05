import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { camera } from "../../../../assets/popular";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import WishlistIcon from "../../../../components/WishlistIcon/WishlistIcon";

function StoreProductListCard({image,title,discountPercentage, rating,price,brand,description,_id}) {

  const reduceWords = (string)=>{
    const words = string.split(" ");
    if (words.length > 7) {
      const truncatedWords = words.slice(0, 7);
      return truncatedWords.join(" ") + "...";
    } else {
      return string;
    }
  
  }

const productApilist ={_id,image,title,discountPercentage, rating,price,brand,description}


  return (
    <div className="">
    <div className=" relative  bg-slate-100 h-auto text-black min-h-[300px] rounded-md p-2
     sm:rounded-lg overflow-hidden md:border border-black lg:border-none
   hover:bg-yellow-100 transition delay-100 hover:text-gray-800 
  
  
      ">
      <div className="flex flex-col items-center ]">
      {/*========= Wishlist 💓💓💓💓========== */}
        <WishlistIcon  product={productApilist}/>
        
        <figure className=" rounded-lg overflow-hidden flex justify-center md:max-w-52 md:max-h-52 md:min-h-52 md:mx-w-52  xs:max-w-[calx(100%-2rem)] xs:max-h-[300px]">
          <img src={image?image :camera}  className=" image-full   object-contain" alt={title}/>
        </figure>
        {/* decriptions
         */}
        <div>
          <small className="text-red-500">{brand}</small>
          <h4 className="text-sm first-letter:capitalize first-letter:font-bold">{title?title:"title"}</h4>
         <div className=" flex gap-1 items-center">
         <ReactStars
        count={5}
        size={16}
        isHalf={true}
        emptyIcon={<FaRegStar />}
        halfIcon={<FaStarHalfAlt />}
        fullIcon={<FaStar />}
        activeColor="#ffd700"
        color={"white"}
        edit={false}
        value={rating?rating:0} 
       
      />
      <small className="text-green-700"> {rating}</small>
         </div>
         {/*==================== show on hover================= */}
        
        <div className=" store-hover-over-card">
        <small>
          { reduceWords(description)}
         </small>
     
          <h4 className=" text-green-800 flex items-center gap-2">
            <span className=" font-bold text-lg">{discountPercentage}%</span>
            <span>off</span>
            <strike className ="text-red-500 text-[10px]" >{123}</strike>
          </h4>
          <small className=" font-bold text-lg text-yellow-600 flex items-center gap-1">
            {" "}
            <FaIndianRupeeSign/>
            <span className=" font-normal text-sm ">{price ?price:0.00}</span>
          </small>
          <Link to={"/cart"} className="  text-orange-600 flex items-center gap-2 border-2 px-4 py-1 hover:bg-orange-300 rounded-xl">
            <span className=" text-sm">Add to Cart</span>
            <FaCartArrowDown/> 
          </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StoreProductListCard;
