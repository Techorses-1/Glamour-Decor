import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioGallery.scss";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

import img4 from "../../../assets/images/home/portfolio4.png"
import img5 from "../../../assets/images/home/portfolio5.png"
import img1 from "../../../assets/images/home/portfolio1.png"
import img2 from "../../../assets/images/home/portfolio2.png"
import img3 from "../../../assets/images/home/portfolio3.png"

const galleryItems = [
    {
        title: "COATING",
        subtitle: "SERVICE",
        image: img1,
        className: "img-1",
        serviceName: "coating", // Add serviceName instead of path
    },
    {
        title: "FOILING",
        subtitle: "SERVICE",
        image: img3,
        className: "img-2 tall",
        serviceName: "foiling",
    },
    {
        title: "PRINTING",
        subtitle: "SERVICE",
        image: img2,
        className: "img-3",
        serviceName: "printing",
    },
    {
        title: "FROSTING",
        subtitle: "SERVICE",
        image: img4,
        className: "img-4 large-row",
        serviceName: "frosting",
    },
    {
        title: "DECAL PRINT",
        subtitle: "SERVICE",
        image: img5,
        className: "img-5 large-row",
        serviceName: "decalprint", // Use lowercase and no space
    },
];

const PortfolioGallery = () => {
    const navigate = useNavigate();
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

    // Function to handle gallery card click
    const handleCardClick = (serviceName) => {
        // Navigate to portfolio page with service name as query parameter
        navigate(`/portfolio?service=${serviceName}`);
    };

    // Function to handle "View all services" click
    const handleViewAllClick = () => {
        navigate("/portfolio"); // Navigate to portfolio page
    };

    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className="portfolio-wrapper">

                {/* HEADER */}
                <div className={`portfolio-header ${inView ? "animate" : ""}`}>
                    <div
                        className="view-all"
                        onClick={handleViewAllClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleViewAllClick();
                            }
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <FiArrowUpRight />
                        <span>View Portfolio</span>
                    </div>

                    <div className="heading">
                        <span className="small-title">OUR PORTFOLIO</span>
                        <h2>
                            OUR GALLERY
                            <span className="underline" />
                        </h2>
                    </div>
                </div>

                {/* FIRST GRID - First 3 images */}
                <div className="portfolio-grid">
                    {galleryItems.slice(0, 3).map((item, i) => (
                        <div
                            key={i}
                            className={`gallery-card ${item.className} ${inView ? "animate" : ""}`}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                animationDelay: `${i * 0.1}s`,
                                cursor: "pointer"
                            }}
                            onClick={() => handleCardClick(item.serviceName)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleCardClick(item.serviceName); // Changed from item.path
                                }
                            }}
                        >
                            <div
                                className={`overlay-text ${item.title === "COATING" ? "overlay-right" : "overlay-left"}`}
                            >
                                <strong>{item.title}</strong>
                                <span>{item.subtitle}</span>
                            </div>

                            <div className="arrow-icon">
                                <FiArrowUpLeft />
                            </div>
                        </div>
                    ))}
                </div>

                {/* SECOND GRID - Last 2 images (EQUAL WIDTH) */}
                <div className="last-images-grid">
                    {galleryItems.slice(3).map((item, i) => (
                        <div
                            key={i + 3}
                            className={`gallery-card ${item.className} ${inView ? "animate" : ""}`}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                animationDelay: `${(i + 3) * 0.1}s`,
                                cursor: "pointer"
                            }}
                            onClick={() => handleCardClick(item.serviceName)} // Changed from item.path
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleCardClick(item.serviceName); // Changed from item.path
                                }
                            }}
                        >
                            <div
                                className={`overlay-text ${item.title === "DECAL PRINT" ? "overlay-right" : "overlay-left"}`}
                            >
                                <strong>{item.title}</strong>
                                <span>{item.subtitle}</span>
                            </div>

                            <div className="arrow-icon">
                                <FiArrowUpLeft />
                            </div>
                        </div>
                    ))}
                </div>

                {/* MOBILE VIEW ALL */}
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
                    style={{ cursor: "pointer" }}
                >
                    <FiArrowUpRight />
                    <span>View all services</span>
                </div>

            </div>
        </section>
    );
};

export default PortfolioGallery;