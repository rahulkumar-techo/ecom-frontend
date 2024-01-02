import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaAppStoreIos } from "react-icons/fa";
function Layer2() {
  const [copied,setCopied] =useState(false)

  return (
    <div className="  grid-cols-5 flex-wrap md:grid flex-col flex justify-center items-start gap-10 py-10">
      <div>
        {/* Contact */}
        <h2 className=" text-2xl font-bold">Contact Us</h2>
        <ul>
          <li>
            <Link> Demo Store</Link>
            <p className=" flex flex-col">
              Address :<small>Neori , vikas Ranchi jharkhand</small>
              <small>pincode : 835217</small>
              <small> Country : India </small>
              <small>+91-9142684664</small>
              <small className="flex gap-2">
                {" "}
                <input
                  type="text"
                  value={"email- rahulkumar7250883289@gmail.com "}
                 className={`${copied ?"text-green-600":"text-green-200"}`}
                  disabled
                />

                <div className=" cursor-pointer " onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText("rahulkumar7250883289@gmail.com ");
                      setCopied(!copied)
                    } else {
                      console.error("Clipboard API not supported");
                    }
                  }}>
                  {
                    copied ?<FaCopy className=" text-green-500" />:<FaCopy/>
                  }

                </div>
               
              </small>
            </p>
            <div className=" flex gap-3 text-3xl">
              <Link to={"https://www.twitter.com/rahulkumar_hd"}>
                <FaSquareXTwitter  />
              </Link>
              <Link to={"https://www.instagram.com/rahulkumar_hd"}>
                <FaInstagramSquare />
              </Link>
              <Link
                to={"https://www.facebook.com/profile.php?id=100024625779171"}
              >
                <FaFacebookSquare />
              </Link>

              <Link>
                <FaPinterestSquare />
              </Link>
              <Link
                to={
                  "https://www.linkedin.com/in/rahul-kumar-6a225127a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
              >
                <FaLinkedin />
              </Link>
              <Link to={"https://github.com/rahulkumar-techo"}>
                <FaGithubSquare />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3 className=" text-2xl font-bold">Information</h3>

        <div className=" flex flex-col">
          <Link>Privacy policy</Link>
          <Link>Refund Policy</Link>
          <Link>Shipping Policy</Link>
          <Link>Privacy policy</Link>
          <Link>Terms of Service</Link>
          <Link>BLogs</Link>
        </div>
      </div>
      <div>
        <h3 className=" text-2xl font-bold">Account</h3>
        <div className="flex flex-col">
          <Link>Search</Link>
          <Link>About us</Link>
          <Link>Faq</Link>
          <Link>Contact</Link>
          <Link>Size Chart</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h3>Quick Links</h3>
        <div className="flex flex-col">
          <Link>Accessories</Link>
          <Link>Laptops</Link>
          <Link>Headphones</Link>
          <Link>smart watches</Link>
          <Link>Tablet</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h3>Our App</h3>
        <div>
          <Link>
            <small>
              Download our app and get 15% discount on your first order
            </small>

          </Link>
          <Link className=" flex items-center flex-col border rounded-md py-1 mb-2" to={"https://play.google.com/store/"}>
           <div className=" flex items-center gap-3"> <DiAndroid className=" text-green-600 text-xl"/> <h3> Download Android App</h3></div>
            <small> from play store</small>
          </Link>
          <Link className=" flex items-center flex-col border rounded-md py-1" to={"https://www.apple.com/in/app-store/"}>
           <div className=" flex items-center gap-3"> <FaAppStoreIos className=" text-cyan-600 text-xl"/> <h3> Download Ios App</h3></div>
            <small> from App store</small>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Layer2;
