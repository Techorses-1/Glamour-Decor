import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ClearGlassBottle from "./pages/ShopByProducts/ClearGlassBottle/ClearGlassBottle";
import ClearGlassJar from "./pages/ShopByProducts/ClearGlassJar/ClearGlassJar";
import Coating from "./pages/OurServices/Coating/Coating";
import Foiling from "./pages/OurServices/Foiling/Foiling";
import Frosting from "./pages/OurServices/Frosting/Frosting";
import Printing from "./pages/OurServices/Printing/Printing";
import DecalPrint from "./pages/OurServices/DecalPrint/DecalPrint";
import Portfolio from "./pages/Portfolio/Portfolio";
import Career from "./pages/Career/Career";
import GoToTop from "./components/GoToTop/GoToTop";


const App = () => {
  return (
    <Router>

      <GoToTop />

      <Navbar/>
     

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clearglassbottle" element={<ClearGlassBottle />} />
        <Route path="/clearglassjar" element={<ClearGlassJar />} />
        <Route path="/coating" element={<Coating />} />
        <Route path="/foiling" element={<Foiling />} />
        <Route path="/frosting" element={<Frosting />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/decalprint" element={<DecalPrint />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />

      </Routes>

     <Footer/>
    </Router>
  );
};

export default App;
