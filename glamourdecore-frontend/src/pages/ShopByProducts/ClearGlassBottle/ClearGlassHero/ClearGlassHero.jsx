import React, { useEffect, useRef, useState } from "react";
import "./ClearGlassHero.scss";
import glassImg from "../../../../assets/images/products/about.png";

const ClearGlassHero = () => {
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
    <section
      className="clear-glass-hero"
      ref={sectionRef}
    >
      <div className="clear-glass-container">

        <div className={`clear-glass-row ${inView ? "animate" : ""}`}>

          {/* LEFT */}
          <div className="clear-glass-content">
            <span className="small-title">Shop By Product</span>

            <h2>
              CLEAR GLASS  BOTTLE
              <span className="underline"></span>
            </h2>

            <p className="para-one">
              When selecting clear glass bottles for your products, consider
              factors such as the size and shape of the bottle, the type of
              closure (cap) and utilization of the glass bottle product is
              taken into consideration.
            </p>
          </div>

          {/* RIGHT */}
          <div className="clear-glass-image">
            <img src={glassImg} alt="Clear Glass Bottle" />
          </div>
        </div>

        <div className={`clear-glass-full-para ${inView ? "animate" : ""}`}>
          <p>
            Clear glass bottle is like a canvas on which any design can be made
            with the help of different glass bottle decoration techniques.
            Unique decoration on clear bottles is essential to reflect brand
            identity. A unique design makes the packaging distinctive and
            aligns with your brand image while meeting the practical needs of
            your product.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClearGlassHero;
