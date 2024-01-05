import React from "react";
import uniqid from "uniqid";
function FamousProductCard({ data }) {
  return (
    <div className=" grid md:grid-cols-3  lg:grid-cols-4 xs:grid-cols-2 gap-5 ">
      {data.map((item) => {
        return (
          <div    key={uniqid()}>
            <div
           
              className={`
                flex  gap-10 flex-col-reverse items-center  w-auto 
         px-2 rounded-lg lg:py-5 py-2 
         relative text-black  transform
         hover:scale-105
        
         ${item.style}
         `}

            >
              <figure className="  bottom-1 rounded-3xl overflow-hidden">
                <img src={item.image} alt="" width={200} />
              </figure>
              {/* detaisl about product */}
              <div className="">
                <small>{item.categories}</small>
                <h3 className=" font-bold font-roboto text-slate-700">{item.title}</h3>
                <small>
                  {`From $${item.price} or $${item.price2} for 24 mo.*`}
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FamousProductCard;
