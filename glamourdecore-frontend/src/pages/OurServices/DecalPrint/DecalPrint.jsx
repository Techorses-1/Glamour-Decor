import React from "react";
import ServiceDetailLayout from "../ServiceInquiryLayout/ServiceDetailLayout";

import inquiryImg from "../../../assets/images/home/newimg.png";
import heroImg from "../../../assets/images/services/decalprint/decalprint-hero.png";


const DecalPrint = () => {
  return (
    <>
      <ServiceDetailLayout
        heroSubHeading="Our Services"
        heroHeading="DECAL PRINT"
        heroImage={heroImg}

        contentHeading="About our decal print service"
        contentParagraphs={[
          "Printing on a Glass bottle is a popular decoration technique that permits us to add lively colours, unique design, and branding characteristics to your Glass bottle Surface.",
          "We are engaged in high-quality printing techniques like Organic print, Ceramic Print, Pad print, and hot foil stamp transfer to ensure enduring & crispy designs. Printing not only makes a packaging solution distinctive but also provides brand divergence and elegant appeal to the glass bottle surface.",
          "Printing is a process that allows us to imprint the graphics and logos directly onto your bottle. Our printing services give your brand a unique brand identity with an attractive packaging solution; finally, your products stand out from ordinary glass bottles. Printing makes your product more visually appealing, leaves the conventional way of labelling, and differentiates your product among several others on the shelf."
        ]}

        inquiryImage={inquiryImg}
        inquiryApi="/api/inquiry/decal-print"
      />
    </>
  );
};

export default DecalPrint;
