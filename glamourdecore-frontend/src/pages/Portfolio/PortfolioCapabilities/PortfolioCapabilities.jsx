import React, { useEffect, useRef, useState } from "react";
import "./PortfolioCapabilities.scss";

import capBig from "../../../assets/images/portfolio/cap1.png";
import capSmall1 from "../../../assets/images/portfolio/cap2.png";
import capSmall2 from "../../../assets/images/portfolio/cap3.png";
import capSmall3 from "../../../assets/images/portfolio/cap4.png";

const PortfolioCapabilities = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: window.innerWidth < 768 ? 0.05 : 0.3
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="portfolio-capabilities" ref={sectionRef}>
            <div className="portfolio-cap-container">

                {/* HEADING */}
                <div className={`portfolio-heading ${inView ? "animate" : ""}`}>
                    <span className="small-title">PORTFOLIO</span>
                    <h2>
                        OUR CAPABILITIES
                        <span className="underline"></span>
                    </h2>
                </div>

                {/* CONTENT ROW */}
                <div className={`portfolio-cap-row ${inView ? "animate" : ""}`}>

                    {/* LEFT BIG IMAGE */}
                    <div className="cap-left">
                        <img src={capBig} alt="Capability showcase" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="cap-right">

                        <ul className="cap-points">
                            <li>
                                Various printing techniques like Screen Print, thermoplast print,
                                hot foil transfer, pad printing, decorative sleeves & decal print.
                            </li>
                            <li>
                                Multiple coating methods including transparent, matte, soft feel,
                                translucent & pearl effects on glass bottles.
                            </li>
                            <li>
                                Multi-colour printing achieved using Servo System attachment setup
                            </li>
                            <li>
                                Operation & warehouse area spread over 60,000 sq ft
                            </li>
                        </ul>

                        <div className="cap-images">
                            <img src={capSmall1} alt="Process 1" />
                            <img src={capSmall2} alt="Process 2" />
                            <img src={capSmall3} alt="Process 3" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PortfolioCapabilities;
