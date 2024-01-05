import React from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";


function BlogCard({ data }) {
 
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 ">
    {/* data */}
      {data.map((item, index) => {
        return (
          <div
            className=" px-3 py-5 rounded-xl xs:w-[200p] flex item-center flex-col items-center bg-brand text-black"
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="md:w-full object-cover xs:w-[150px]  w-[100px] rounded-md"
            />

            {/* descriptions  */}
            <div>
              <small>{Date.now()}</small>
              <div className=" flex flex-col gap-3 ">
                <h4>Hello world we are not here...</h4>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </small>

                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  <Link className=" flex items-center gap-2 ">
                    Read more <FaBookReader />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogCard;
