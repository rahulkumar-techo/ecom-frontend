import React, { useEffect, useState } from "react";
import Layer1 from "./Header_components/Layer1";
import Layer2 from "./Header_components/Layer2";
import Layer3 from "./Header_components/Layer3";

function Index() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full top-0 z-50 dark-body">
      {/* upper offer layer */}
      {/* <Layer1 /> */}
      {!isScrollingUp ? null : <Layer1 />}
      {/* search items */}
      {/* {isScrollingUp ? null : <Layer2 />} */}
      <Layer2 />
      {/* menus */}
      {!isScrollingUp ? null : <Layer3 className="md:flex hidden" />}
    </div>
  );
}

export default Index;
