import React, { useEffect, useRef, useState } from "react";
import "./ClearJarHero.scss";
import jarImg from "../../../../assets/images/products/about.png";

const ClearJarHero = () => {
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
    <section className="clear-jar-hero" ref={sectionRef}>
      <div className="clear-jar-container">

        <div className={`clear-jar-row ${inView ? "animate" : ""}`}>

          {/* LEFT */}
          <div className="clear-jar-content">
            <span className="small-title">Shop By Product</span>

            <h2>
              CLEAR GLASS JAR
              <span className="underline"></span>
            </h2>

            <p className="para-one">
              Clear glass jars are widely used for packaging products where
              visibility and presentation play an important role. Their clean
              and transparent look helps showcase the contents while maintaining
              a premium and trustworthy appearance.
            </p>
          </div>

          {/* RIGHT */}
          <div className="clear-jar-image">
            <img src={jarImg} alt="Clear Glass Jar" />
          </div>
        </div>

        <div className={`clear-jar-full-para ${inView ? "animate" : ""}`}>
          <p>
            Clear glass jars offer endless possibilities for branding through
            decoration techniques such as labeling, printing, coating, and
            embossing. A thoughtfully designed jar not only protects the
            product but also enhances shelf appeal and reinforces brand
            identity in a competitive market.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClearJarHero;
