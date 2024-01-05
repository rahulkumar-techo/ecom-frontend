


    import React from "react";
    import uniqid from "uniqid";
    
    function WishlistPagination({ fnPage, page, totaldata }) {
      // Previous
      const selectedPage = (currentPage) => {
        if (
          currentPage >= 1 &&
          currentPage <= Math.ceil(totaldata / 10) &&
          currentPage !== page
        ) {
          fnPage(currentPage);
        }
      };
     
    
      return (
        <div
          className={`flex py-5 px-10 items-center gap-5 justify-center shadow-2xl`}
        >
          <button
            className="border py-2 px-4 rounded-lg hover:scale-105 hover:bg-orange-300 hover:text-black transition delay-75"
            onClick={() => selectedPage(page - 1)}
          >
            Previous
          </button>
          <p>
          {[...Array(Math.ceil(totaldata / 10))].map((_, i) => {
          return (
            <span
              key={uniqid()}
              onClick={() => selectedPage(i + 1)}
              className={` ${
                page === i + 1 ? "bg-orange-300 cursor-pointer" : ""
              } px-4 py2 py-2  transition delay-75 rounded cursor-pointer`}
            >
              {i + 1}
            </span>
          );
        })}
          </p>
          <button
            className="border py-2 px-4 rounded-lg hover:scale-105 hover:bg-orange-300 hover:text-black transition delay-75"
            onClick={() => selectedPage(page + 1)}
          >
            Next
          </button>
        </div>
      );
    }
    
    export default WishlistPagination;
    