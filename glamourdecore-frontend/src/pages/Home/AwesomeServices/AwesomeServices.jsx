import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AwesomeServices.scss";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../../../assets/images/home/awsome1.png"
import img2 from "../../../assets/images/home/awsome2.png"
import img3 from "../../../assets/images/home/awsome3.png"
import img4 from "../../../assets/images/home/awsome4.png"
import img5 from "../../../assets/images/home/awsome5.png"

const services = [
  {
    title: "COATING SERVICES",
    img: img1,
    path: "/coating",
  },
  {
    title: "PRINTING SERVICES",
    img: img2,
    wide: true,
    path: "/printing",
  },
  {
    title: "FOILING SERVICES",
    img: img3,
    path: "/foiling",
  },
  {
    title: "FROSTING SERVICES",
    img: img4,
    path: "/frosting",
  },
  {
    title: "DECAL PRINT SERVICES",
    img: img5,
    path: "/decalprint",
  },
];

const AwesomeServices = () => {
  const navigate = useNavigate();
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

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path);
  };

  // Function to handle "View all services" click
  const handleViewAllClick = () => {
    navigate("/services");
  };

  return (
    <section 
      className="awesome-services" 
      ref={sectionRef}
      id="services-section"
    >
      <div className="services-wrapper">
        {/* HEADER */}
        <div className={`services-header ${inView ? "animate" : ""}`}>
          {/* LEFT - "View all services" is clickable */}
          <div className="view-all" onClick={handleViewAllClick}>
            <FiArrowUpRight />
            <span>View all services</span>
          </div>

          {/* RIGHT */}
          <div className="heading">
            <span className="small-title">OUR LATEST</span>
            <h2>
              AWESOME SERVICES
              <span className="underline"></span>
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div
              key={index}
              className={`service-card ${item.wide ? "wide" : ""} ${inView ? "animate" : ""}`}
              style={{ 
                backgroundImage: `url(${item.img})`,
                animationDelay: `${index * 0.15}s`,
                cursor: "pointer" // Add pointer cursor
              }}
              onClick={() => handleCardClick(item.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item.path);
                }
              }}
            >
              <div className="overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW ALL - Also clickable */}
        <div 
          className={`mobile-view-all ${inView ? "animate" : ""}`}
          onClick={handleViewAllClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleViewAllClick();
            }
          }}
        >
          <FiArrowUpRight />
          <span>View all services</span>
        </div>
      </div>
    </section>
  );
};

export default AwesomeServices;