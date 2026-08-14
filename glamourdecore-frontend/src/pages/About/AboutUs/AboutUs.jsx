import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.scss";

import hero from "../../../assets/images/about/about-hero.png"

import img1 from "../../../assets/images/about/new-img.png"
import img2 from "../../../assets/images/about/img2.png"

const AboutUs = () => {
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check if mobile on initial load
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer - DISABLE ON MOBILE
  useEffect(() => {
    // ON MOBILE: Show immediately (no observer needed)
    if (isMobile) {
      setInView(true);
      return;
    }

    // ON DESKTOP: Use Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
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
  }, [isMobile]);

  return (
    <section className="about-section" ref={sectionRef}>
      {/* HEADER - UPDATED TO MATCH BLOGPOSTS */}
      <div className={`about-header ${inView ? "animate" : ""}`}>
        <span className="small-title">OUR COMPANY</span>
        <h2>ABOUT US</h2>
        <div className="blue-underline"></div>
      </div>

      {/* FULL WIDTH IMAGE - REDUCED HEIGHT */}
      <div className={`about-banner ${inView ? "animate" : ""}`}>
        <img
          src={hero} 
          alt="Perfume Bottles"
        />
      </div>

      {/* CONTENT ROW - LEFT 60%, RIGHT 40% */}
      <div className="about-content-row">
        {/* LEFT TEXT - 60% WIDTH */}
        <div className={`about-text ${inView ? "animate" : ""}`}>
          <p className="intro-text">
            We are proud to introduce ourselves as a one-stop solution provider
            for your glass bottle decoration needs.
          </p>

          <div className="vision-mission">
            <div className={`vm-box ${inView ? "animate" : ""}`} style={{ animationDelay: "0.2s" }}>
              <h4>Our Vision</h4>
              <span className="vm-underline"></span>
              <p>
                We make sure the quality management system is embraced by the
                whole organization by means of training and improvement in terms
                of resources and processes.
              </p>
            </div>

            <div className={`vm-box ${inView ? "animate" : ""}`} style={{ animationDelay: "0.4s" }}>
              <h4>Our Mission</h4>
              <span className="vm-underline"></span>
              <p>
                Our mission is to build strong relations with our customers by
                delivering quality decorative products on time.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - 40% WIDTH */}
        <div className={`about-image ${inView ? "animate" : ""}`} style={{ animationDelay: "0.6s" }}>
          <img
            src={img1}
            alt="Decorated Bottle"
          />
        </div>
      </div>

      {/* BOTTOM ROW - LEFT 60%, RIGHT 40% */}
      <div className="about-bottom-row">
        {/* LEFT IMAGE - 60% WIDTH */}
        <div className={`bottom-image ${inView ? "animate" : ""}`} style={{ animationDelay: "0.8s" }}>
          <img
            src={img2}
            alt="Flower"
          />
        </div>

        {/* RIGHT TEXT - 40% WIDTH */}
        <div className={`bottom-text ${inView ? "animate" : ""}`} style={{ animationDelay: "1s" }}>
          <span className="vertical-line"></span>

          <div>
            <h3>GLAMOUR DECOR</h3>
            <h5>Design and Decoration</h5>
            <p>
              We offer quality glass bottle beautification services comprises of
              large product categories and industries like Perfume, Cosmetic,
              Liquor, Fragrance, & Pharmaceutical with numerous coating &
              printing techniques to cater packaging & branding requirements.
            </p>
            <p>Since more than 15 years we are engaged in designing distinctive
              decorative moulds for more than 20 leading industries.</p>

            <p>
              Glamour Decor is maiden glass bottle Decoration Company
              strategically situated at Luna, Vadodara, Gujarat. Top management
              having more than 20 years of work experience in same Industry with
              International exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;