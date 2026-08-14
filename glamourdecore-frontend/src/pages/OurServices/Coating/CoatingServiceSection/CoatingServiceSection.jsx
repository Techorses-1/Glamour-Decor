import React, { useEffect, useRef, useState } from "react";
import "./CoatingServiceSection.scss";
import coatingImg from "../../../../assets/images/services/coating/coating-hero.png";

const CoatingServiceSection = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="coating-service" ref={sectionRef}>

      {/* ===== TOP HEADING ===== */}
      <div className={`coating-hero-heading ${inView ? "animate" : ""}`}>
        <span className="small-title">Our Services</span>

        <h2>
          COATING
          <span className="underline"></span>
        </h2>
      </div>

      {/* ===== FULL WIDTH IMAGE ===== */}
      <div className="coating-full-image">
        <img src={coatingImg} alt="Coating Service" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className={`coating-content ${inView ? "animate" : ""}`}>
        <h3>About our coating service</h3>

        <p>
          Coating provides touch of stylishness & peculiarity to glass bottle
          surface. Coating not only amplify the visual appeal of the product
          but also prevents scratches formation during manufacture handling,
          cleaning and filling of bottles. Glamour Décor offers variety of
          coating options like matte, glossy, transparent, opaque, translucent
          and metallic finishes.
        </p>

        <p>
          Coating on a glass bottle improves the mechanical properties and
          reliability of the products. It brings life to the products against
          scratch & UV rays, moreover coating bring peculiarities in your
          packaging. Glamour Décor perform a variety of coating methods like
          Transparent, Glossy, Opaque, Matt, Soft touch & metallizing.
        </p>
      </div>

    </section>
  );
};

export default CoatingServiceSection;
