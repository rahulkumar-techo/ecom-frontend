import React, { useEffect, useState } from "react";
import Breadcumb from "./StoreComp/Breadcumb";
import StoreMenu from "./StoreComp/StoreMenu/StoreMenu";
import StoreProductList from "./StoreComp/StoreProductList/StoreProductList";
import Loader from "../loader/Loader.jsx";


function Stores() {
  const [apiLoading, setApiLoading] = useState(false);

  const [productApi, setProductApi] = useState([]);

  useEffect(() => {
    async function productApi() {
      try {
        const api = await fetch("https://dummyjson.com/products/");
        const apiData = await api.json();
        const data_InArray_Formate = Array.isArray(apiData)?apiData:[apiData];

        setProductApi(data_InArray_Formate[0].products);
        // After Getting data remove Loading .......
        setApiLoading(true);


        // pagination Functionality

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    productApi();
  }, []);

  useEffect(()=>{

  },[])





  // <========> Api Handling End
  //<========> Api Handling End
  return (
    <div>
      {apiLoading ? (
        <>
          <div className=" pb-5 border-b">
            <Breadcumb title={"Our Store"} />
          </div>
          <div className=" md:flex  xl:mx-20 relative px-3">
            {/* left side Sorting Filtering  */}
            <StoreMenu className={" xs:hidden hidden md:block"} />

            {/* Right side Products */}
            <StoreProductList productApi={productApi} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Stores;
