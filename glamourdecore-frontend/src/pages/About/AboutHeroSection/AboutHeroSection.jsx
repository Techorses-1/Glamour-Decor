import React from "react";
import "./AboutHeroSection.scss";
import img from "../../../assets/images/home/newhero.png"; // change image if needed

const AboutHeroSection = () => {
  return (
    <section className="about-hero">
      {/* Background Image */}
      <img
        src={img}
        alt="About Hero Background"
        className="about-hero-bg-image"
      />

      {/* Content */}
      <div className="about-hero-content">
        {/* Optional heading */}
        {/* <h1>About Us</h1> */}
      </div>
    </section>
  );
};

export default AboutHeroSection;
