import React, { useEffect, useRef, useState } from "react";
import "./GlassBenefits.scss";

const data = [
    {
        title: "AESTHETIC APPEAL",
        text:
            "Clear glass allowing customers to see the colour and clarity of the product inside. This is particularly important for cosmetics and perfumes where the appearance of the product is a key selling point. Clear bottle provides a transparent and elegant look of the product."
    },
    {
        title: "UV PROTECTION",
        text:
            "Clear glass bottles are treated to provide UV protection, preventing the contents from being affected by exposure to sunlight. For products like perfumes and certain liquors UV rays protection protect the material against degradation."
    },
    {
        title: "VERSATILITY",
        text:
            "Clear glass bottles offer a timeless and classic appeal to products like perfumes, cosmetics, and various types of liquors according to various branding styles."
    },
    {
        title: "RECYCLABILITY",
        text:
            "Glass is highly recyclable, making it an environmentally friendly packaging option. Many consumers appreciate products that come in recyclable packaging, contributing to a brand's sustainability efforts.",
        extra: true
    }
];

const GlassBenefits = () => {
    const [visible, setVisible] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(v => [...v, entry.target.dataset.index]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        refs.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="glass-benefits">
            <div className="glass-benefits-container">

                {data.map((item, i) => (
                    <div
                        key={i}
                        ref={el => (refs.current[i] = el)}
                        data-index={i}
                        className={`benefit-card ${visible.includes(String(i)) ? "animate" : ""
                            } ${i % 2 === 0 ? "from-left" : "from-right"}`}
                    >
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>

                        {/* EXTRA CONTENT INSIDE 4TH CARD */}
                        {item.extra && (
                            <div className="extra-section">
                                <div className="sub-item">
                                    <span className="line"></span>
                                    <div>
                                        <h4>CUSTOMIZATION</h4>
                                        <p>
                                            Clear glass bottles can be easily customized with labels, printing, or embossing to
                                            showcase brand logos, product information, or unique designs. This allows brands to
                                            create distinctive packaging that stands out on the shelves.

                                        </p>
                                    </div>
                                </div>

                                <div className="sub-item">
                                    <span className="line"></span>
                                    <div>
                                        <h4>DURABILITY</h4>
                                        <p>
                                            Glass is a durable material that helps protect the contents from external factors. It
                                            is less permeable than plastic, providing a better barrier against air and moisture
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default GlassBenefits;
