import React from "react";
import "./HeroSection.scss";
// import img from "../../../assets/images/home/heroimage.jpg"
import img from "../../../assets/images/home/newhero.png"

const HeroSection = () => {
  return (
    <>
    <section className="hero">
      {/* Image in JSX */}
      <img
        src={img}
        alt="Hero Background"
        className="hero-bg-image"
      />
    
    </section>
    
    </>
  );
};

export default HeroSection;