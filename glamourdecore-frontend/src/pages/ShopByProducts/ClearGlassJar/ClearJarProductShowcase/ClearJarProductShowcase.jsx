import React from "react";
import "./ClearJarProductShowcase.scss";

import j1 from "../../../../assets/images/products/jar/product1.png";
import j2 from "../../../../assets/images/products/jar/product2.png";
import j3 from "../../../../assets/images/products/jar/product3.png";



// import j4 from "../../../../assets/images/home/product.png";
// import j5 from "../../../../assets/images/home/product.png";

const jarProducts = [
  { name: "OCTAGONAL GLASS JAR (63 MM LUG)", ml: "370ml", img: j1 },
  { name: "BALM GLASS JAR SCREW NECK", ml: "18ml", img: j2 },
  { name: "NESLIHAN (PLAIN)", ml: "50ml", img: j3 },
,
];

const ClearJarProductShowcase = () => {
  return (
    <section className="clear-jar-product-showcase">
      <div className="clear-jar-product-container">

        {/* TOP 3 */}
        <div className="clear-jar-grid clear-jar-grid-top">
          {jarProducts.slice(0, 3).map((item, i) => (
            <div key={i} className="clear-jar-card">
              <div className="clear-jar-bg">
                <img src={item.img} alt={item.name} />
              </div>

              <h4>{item.name}</h4>
              <span className="ml">{item.ml}</span>
              <span className="link">Know more</span>
            </div>
          ))}
        </div>

        {/* BOTTOM 2 CENTER */}
        <div className="clear-jar-grid clear-jar-grid-bottom">
          {jarProducts.slice(3, 5).map((item, i) => (
            <div key={i} className="clear-jar-card">
              <div className="clear-jar-bg">
                <img src={item.img} alt={item.name} />
              </div>

              <h4>{item.name}</h4>
              <span className="ml">{item.ml}</span>
              <span className="link">Know more</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClearJarProductShowcase;
