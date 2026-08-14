import React from "react";
import "./ProductShowcase.scss";

import p1 from "../../../../assets/images/products/glass/product1.png";
import p2 from "../../../../assets/images/products/glass/product2.png";
import p3 from "../../../../assets/images/products/glass/product3.png";
import p4 from "../../../../assets/images/products/glass/product4.png";
import p5 from "../../../../assets/images/products/glass/product5.png";

const products = [
    { name: "NEW CHAPLIN", ml: "50ml", img: p1 },
    { name: "QUEST", ml: "50ml", img: p2 },
    { name: "BOLERO", ml: "100ml", img: p3 },
    { name: "CULTURE", ml: "100ml", img: p4 },
    { name: "DAFFODIL", ml: "100ml", img: p5 },
];

const ProductShowcase = () => {
    return (
        <section className="product-showcase">
            <div className="product-container">

                <div className="product-grid product-grid-top">
                    {products.slice(0, 3).map((item, i) => (
                        <div key={i} className="product-card">
                            <div className="product-bg">
                                <img src={item.img} alt={item.name} />
                            </div>

                            <h4>{item.name}</h4>
                            <span className="ml">{item.ml}</span>
                            <span className="link">Know more</span>
                        </div>
                    ))}
                </div>

                <div className="product-grid product-grid-bottom">
                    {products.slice(3, 5).map((item, i) => (
                        <div key={i} className="product-card">
                            <div className="product-bg">
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

export default ProductShowcase;
