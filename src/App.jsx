import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import { About,Contact } from "./components/DetailsComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User router */}
        <Route path="/" element={<Layout />}>
          {/* <Route path="/footer" element={<Hero/>}/> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Dashboard router*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
