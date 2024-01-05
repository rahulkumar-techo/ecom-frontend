import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Store from "./pages/Stores";
import Contact from "./pages/Contact";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs"
import WishlistPage from "./pages/WishlistPage/WishlistPage";
// import Login from "./pages/LoginPage/Login";
import Signin from "./pages/SigninPage/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User router */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store/>} />
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="wishlist" element={<WishlistPage/>}/>
          {/* <Route path="login" element={Login}/> */}
          <Route path="signin" element={Signin}/>
        </Route>
        {/* Dashboard router*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
