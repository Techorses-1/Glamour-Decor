import React from "react";
import "./CareerHero.scss";
import img from "../../../assets/images/career/hero-career.png";

const CareerHero = () => {
  return (
    <>
      <section className="career-hero">
        {/* Image in JSX */}
        <img
          src={img}
          alt="Career Hero Background"
          className="career-hero-bg-image"
        />

        {/* OPTIONAL CONTENT (keep commented like Portfolio) */}
        {/*
        <div className="career-hero-content">
          <h1>Careers</h1>
        </div>
        */}
      </section>
    </>
  );
};

export default CareerHero;
