import React, { useState, useRef, useEffect } from "react";
import { logo } from "../../../assets";
import Searchbar from "./Searchbar";
import Progressbar from "./Progressbar";
import { RiMenuFoldFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Mobile from "./Mobile";

// Wrap Mobile with forwardRef to enable the use of refs
const ForwardedMobile = React.forwardRef((props, ref) => <Mobile {...props} forwardedRef={ref} />);

function Layer2({className}) {
  const [toggler, setToggler] = useState(false);
  const [bdy,setbdy] =useState(false);

  // Ref to detect clicks within the menu region
  const menuRef = useRef(null);

  // Handle clicks outside the menu region to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggler(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex items-center justify-between px-6 xl:px-10 shadow-md py-2 `}>
      {/* LOGO */}
      <div>
        <img src={logo} alt="Logo" className="sm:w-24 w-20" />
      </div>
      {/* Searchbar */}
      <Searchbar />
      {/* activity Bar */}
      <Progressbar className="hidden" />
      {/*🧑🧑---------------- user profile or avatar---------------🧑🧑 */}
      <div className="block sm:hidden px-3 text-xl">
        <Link to={"/login"}>
          <FaRegUserCircle />
        </Link>
      </div>
      <div
        className="md:hidden block md:gap-5 xl:gap-10 text-xl"
        onClick={() => {
          setToggler(!toggler);
        }}
      >
        {!toggler && <RiMenuFoldFill /> }
        {/* mobile */}
      </div>
      {toggler && <ForwardedMobile ref={menuRef} fnToggler={setToggler} toggle={toggler} />}
    </div>
  );
}

export default Layer2;
