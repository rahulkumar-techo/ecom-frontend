import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Selector from "./Selector";

function Layer1() {
  const items1 = ["ENG","HIN"];
  const items2 = ["USD", "INR", "RUB"];

  const [themeToggler, setThemeToggler] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeToggler(savedTheme === "dark-theme");
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (selectedTheme) => {
    document.body.classList.toggle("dark-body", selectedTheme === "dark-theme");
    document.body.classList.toggle("light-body", selectedTheme === "light-theme");
    // Apply additional theme-specific styles here
  };

  const handleThemeToggle = () => {
    const newTheme = themeToggler ? "light-theme" : "dark-theme";
    setThemeToggler(!themeToggler);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };




  return (
    <div>
      <div className={`flex items-center justify-around py-1 shadow-sm ${themeToggler ? 'dark-theme' : 'light-theme'}`}>
        <Link className=" sm:block hidden">
          <small >Offer zone coming here</small>
        </Link>
        <div className="flex items-center gap-3">
          <Link to={`https://mail.google.com/mail/`} className="hidden sm:block">
            <small>rahulkumar7250883289@gmail.com</small>
          </Link>
          
          {/* Selector for Language */}
          <Selector items={items1} defaultval={"ENG"} />
          {/* Currency Selector */}
          <Selector items={items2} defaultval={"Curr"} />
          {/* Theme Toggler */}
          <input
            type="checkbox"
            className="toggle toggle-warning"
            checked={themeToggler}
            onChange={handleThemeToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default Layer1;

