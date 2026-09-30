import React from "react";
import "./InfoMarquee.scss";

const items = [
  {
    title: "HOW WE WORK?",
    desc: "Top management is involved for packing solutions.",
  },
  {
    title: "WHAT WE DO?",
    desc: "Comprehensive solution for all Glass decor needs.",
  },
  {
    title: "GET A QUOTE!",
    desc: "Our warehouse area spread over 62000 Sq feet.",
  },
];

const InfoMarquee = () => {
  return (
    <section className="info-marquee-section">
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map((item, index) => (
            <div className="info-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoMarquee;
