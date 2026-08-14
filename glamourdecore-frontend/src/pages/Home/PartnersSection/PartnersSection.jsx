import React, { useEffect, useRef, useState } from "react";
import "./PartnersSection.scss";

import client1 from "../../../assets/images/home/clients/client1.png";
import client2 from "../../../assets/images/home/clients/client2.png";
import client3 from "../../../assets/images/home/clients/client3.png";
import client4 from "../../../assets/images/home/clients/client4.png";
import client5 from "../../../assets/images/home/clients/client5.png";
import client6 from "../../../assets/images/home/clients/client6.png";
import client7 from "../../../assets/images/home/clients/client7.png";
import client8 from "../../../assets/images/home/clients/client8.jpg";
import client9 from "../../../assets/images/home/clients/client9.png";
import client10 from "../../../assets/images/home/clients/client10.png";
import client11 from "../../../assets/images/home/clients/client11.png";
import client12 from "../../../assets/images/home/clients/client12.png";
import client13 from "../../../assets/images/home/clients/client13.png";
import client14 from "../../../assets/images/home/clients/client14.png";

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
];

const PartnersSection = () => {
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
        threshold: window.innerWidth < 768 ? 0.05 : 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-wrapper">


        {/* CONTENT ROW with animations */}
        <div className={`portfolio-partners-row ${inView ? "animate" : ""}`}>

          {/* LEFT – LOGOS */}
          <div className="partners-logos">
            <div className="logos-grid">
              {logos.map((logo, i) => (
                <div 
                  className={`logo-box ${inView ? "animate" : ""}`} 
                  key={i}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <img src={logo} alt="partner" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className={`partners-content ${inView ? "animate" : ""}`}>
            <div className="quote">"</div>

            <div className="content-text">
              <div className="years">20</div>
              <div className="text">
                YEARS OF WORK <br />
                EXPERIENCE WITH OUR <br />
                <strong className="strong">PARTNERS</strong>
              </div>
            </div>

            <span className="underline" />
          </div>

        </div>

      </div>

      {/* MOBILE MARQUEE with animations */}
      <div className={`partners-marquee ${inView ? "animate" : ""}`}>
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="marquee-logo" key={i}>
              <img src={logo} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;