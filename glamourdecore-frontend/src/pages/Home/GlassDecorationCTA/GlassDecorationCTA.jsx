import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./GlassDecorationCTA.scss";
import { FiArrowUpRight } from "react-icons/fi";
import img from "../../../assets/images/home/bgcta.png"

const bgImage = img;

const GlassDecorationCTA = () => {
  const navigate = useNavigate(); // Add navigate hook
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
        threshold: 0.3, // Trigger when 30% is visible
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

  // Function to handle Contact button click
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section
      className="glass-cta"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={sectionRef}
    >
      {/* CONTENT */}
      <div className="glass-cta-overlay">
        <div className={`glass-cta-content ${inView ? "animate" : ""}`}>
          <h2>
            Are you looking for quality glass <br />
            bottle decoration services for your <br />
            packaging solution?
          </h2>

          <span className="underline" />

          <p>
            We provide customized glass bottle decoration solutions to Perfume,
            Cosmetic, Food packing, Pharmaceutical, Candle jar & liquor
            manufacturers to fulfill packaging & branding requirements.
          </p>
        </div>

        {/* DESKTOP CTA - Now clickable */}
        <div 
          className={`cta-desktop ${inView ? "animate" : ""}`}
          onClick={handleContactClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleContactClick();
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <span>Contact with us</span>
          <FiArrowUpRight />
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div
        className="glass-cta-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* MOBILE CTA - Now clickable */}
      <div 
        className={`cta-mobile ${inView ? "animate" : ""}`}
        onClick={handleContactClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleContactClick();
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <span>Contact with us</span>
        <FiArrowUpRight />
      </div>
    </section>
  );
};

export default GlassDecorationCTA;