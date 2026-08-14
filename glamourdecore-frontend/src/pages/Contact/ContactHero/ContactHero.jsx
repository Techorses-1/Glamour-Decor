import React from "react";
import "./ContactHero.scss";

import hero from "../../../assets/images/contact/contact-hero.png"

const ContactHero = () => {
  return (
    <section className="contact-hero">
      {/* HEADER - SAME AS ABOUT PAGE */}
      <div className="contact-hero-header">
        {/* <span className="small-title">GET IN TOUCH</span> */}
        <h2>CONTACT US</h2>
        <div className="blue-underline"></div>
      </div>

      {/* FULL WIDTH IMAGE - SAME AS ABOUT PAGE */}
      <div className="contact-hero-banner">
        <img
          src={hero}
          alt="Contact Us Banner"
        />
      </div>
    </section>
  );
};

export default ContactHero;