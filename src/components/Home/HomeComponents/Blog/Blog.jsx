import React from "react";
import BlogCard from "./BlogCard";
import {blog1,camera,mainBanner,mainBanner1,tab3} from "../../../../assets/testImg";

function Blog() {
  return (
    <div className="px-3">
      <h3 className=" font-bold font-lg md:py-10 px-5 py-5 ">
  <a href="#" className=" font-bold line-clamp-1"> Our Latest News</a>
      </h3>
     
     <BlogCard data={blogData} />
    
    </div>
  );
}

const blogData = [
  {
    title: "Verctual simulation accuring the whole word",
    description: " Easily Create a Modern ECommerce Website Using React Js (HTML, CSS, and React) in 2023! ",
    category: "Electronics",
    view: 123,
    like: 90,
    dislike: 21,
    image:blog1,
    date:  Date.now(),
    link:"#"
  },
  {
    title: "Verctual simulation accuring the whole word",
    description: " Easily Create a Modern ECommerce Website Using React Js (HTML, CSS, and React) in 2023! ",
    category: "Electronics",
    view: 123,
    like: 90,
    dislike: 21,
    image:mainBanner,
    date:  Date.now(),
    link:"#"
  },
  {
    title: "Camera",
    description: " Easily Create a Modern ECommerce Website Using React Js (HTML, CSS, and React) in 2023! ",
    category: "Electronics",
    view: 123,
    like: 90,
    dislike: 21,
    image:blog1,
    date:  Date.now(),
    link:"#"
  },
  {
    title: "Verctual simulation accuring the whole word",
    description: " Easily Create a Modern ECommerce Website Using React Js (HTML, CSS, and React) in 2023! ",
    category: "Electronics",
    view: 123,
    like: 90,
    dislike: 21,
    image:blog1,
    date:  Date.now(),
    link:"#"
  },

];
export default Blog;
