import React from 'react';
import WishlistMenuComp from './WishlistComp/WishlistMenuComp';
import WishlistProductComp from './WishlistComp/WishlistProductComp';

function WishlistPage() {
  return (
   <div className='lg:pt-44 sm:pt-28 md:pt-40 pt-28 mx-1 min-h-screen'>

     <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-10  '>
     
     {/* =================LEFT WISHLIST MENU ============= */}
     <WishlistMenuComp/>
     {/* <=============RIGHT WISHLIST PRODUCT LIST===============> */}
     <WishlistProductComp/>
     </div>
   </div>
  )
}

export default WishlistPage