import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

function Searchbar() {

const [toggle,setToggle]=useState(false);
const mouseEnter =(e)=>{
  e.preventDefault();

  
}

  return (
 
      <form action="" className={`flex  rounded-lg overflow-hidden sm:w-[100%] lg:w-[50%]   w-full ${toggle ?"bg-yellow-600 ":""}p-1`}>
        <input
          type="text"
          className="  p-2 w-full rounded-s outline-none border-none text-black"
          placeholder="Search..."
          onFocus={()=>{setToggle(!toggle)}}
          
        />
        <button
          type="submit"
          className="bg-hov p-2  rounded-e"
          onMouseEnter={mouseEnter}
        >
          <IoIosSearch />
        </button>
      </form>

  );
}

export default Searchbar;
