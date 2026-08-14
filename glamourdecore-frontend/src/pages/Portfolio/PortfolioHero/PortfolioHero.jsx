import React from "react";
import "./PortfolioHero.scss";
import img from "../../../assets/images/portfolio/hero-portfolio.png";

const PortfolioHero = () => {
  return (
    <>
      <section className="portfolio-hero">
        {/* Image in JSX */}
        <img
          src={img}
          alt="Portfolio Hero Background"
          className="portfolio-hero-bg-image"
        />

        {/* OPTIONAL: content if needed later */}
        {/* 
        <div className="portfolio-hero-content">
          <h1>Our Portfolio</h1>
        </div> 
        */}
      </section>
    </>
  );
};

export default PortfolioHero;
