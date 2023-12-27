import React from 'react';
import { IoIosGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Progressbar({className}) {
  return (
    <div className={`md:flex md:gap-5 xl:gap-10 ${className} px-5`}>
      <Link className='flex items-center md:gap-2 text-hov-icon'>
        <IoIosGitCompare className='text-md sm:text-xl md:text-2xl lg:text-3xl' />
        <p className='flex flex-col items-center justify-center text-sm'>
          Compare <small>Product</small>
        </p>
      </Link>
      <Link className='flex items-center md:gap-3 text-hov-icon'>
        <FaRegHeart className='text-md sm:text-xl md:text-2xl lg:text-3xl' />
        <p className='flex flex-col items-center justify-center text-sm'>
          Favourite <small>Wishlist</small>
        </p>
      </Link>
      <Link className='flex items-center md:gap-1 xl:gap-3 text-hov-icon'>
        <FaRegUser className='text-md sm:text-xl md:text-2xl lg:text-3xl' />
        <p className='flex flex-col items-center justify-center text-sm lg:text-sm'>
          Log in <small>My_Account</small>
        </p>
      </Link>
      <Link className='flex items-center md:gap-3  text-hov-icon'>
        <BsCart4 className='text-md sm:text-xl md:text-2xl lg:text-3xl' />
        <p className='flex flex-col items-center justify-center text-sm'>
          Item <small>$100.00</small>
        </p>
      </Link>
    </div>
  );
}

export default Progressbar;
