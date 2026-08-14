import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./AboutSection.scss";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import img1 from "../../../assets/images/home/about.png"

const images = [
  img1,
  img1,
  img1,
  img1,
];

const AboutSection = () => {
  const navigate = useNavigate(); // Add navigate hook
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const prev = () =>
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () =>
    setIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  // Function to handle Company info click
  const handleCompanyInfoClick = () => {
    navigate("/about");
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-wrapper">

        {/* LEFT SIDE */}
        <div className={`about-left ${inView ? "animate" : ""}`}>
          <div className="about-title">
            ABOUT US
            <span className="underline" />
          </div>

          <h2 className="main-heading">
            Comprehensive Solution For
            <br />
            All Glass Decor Needs
          </h2>

          <p className="about-text">
            We offer quality glass bottle beautification services comprises of
            large product categories and industries like Perfume, Cosmetic,
            Liquor, Fragrance, & Pharmaceutical with numerous coating & printing
            techniques to cater packaging & branding requirements. Since more
            than 15 years we are engaged in designing distinctive decorative
            moulds for more than 20 leading industries.
          </p>

          <div className="highlight-text">
            Top Management is
            <br />
            involved for packing
            <br />
            solution
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`about-right ${inView ? "animate" : ""}`}>
          {/* UPDATED: Company info with click handler */}
          <div 
            className="company-info"
            onClick={handleCompanyInfoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCompanyInfoClick();
              }
            }}
            style={{ cursor: "pointer" }}
          >
            Company info <FiArrowUpRight />
          </div>

          <div className="image-slider">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="slide"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>

            {/* UPDATED: Arrows at bottom left side with green color */}
            {/* <div className="slider-controls">
              <button className="nav prev" onClick={prev}>
                <FiChevronLeft />
              </button>
              <button className="nav next" onClick={next}>
                <FiChevronRight />
              </button>
            </div> */}
          </div>

          <div className="right-caption">
            Comprehensive
            <br />
            solution for all Glass
            <br />
            decor needs
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;