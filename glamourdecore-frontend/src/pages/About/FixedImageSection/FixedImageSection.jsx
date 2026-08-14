import React from "react";
import "./FixedImageSection.scss";
import bgimage from "../../../assets/images/about/bgabout.png"

const FixedImageSection = () => {
  return (
    <section className="fixed-image-wrapper">
      <div className="fixed-image">
        <img
          src={bgimage}
          alt="Perfume Decoration"
        />
      </div>
    </section>
  );
};

export default FixedImageSection;
