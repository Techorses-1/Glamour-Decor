import React from 'react'
import CoatingServiceSection from './CoatingServiceSection/CoatingServiceSection'
import ServiceInquirySection from './ServiceInquirySection/ServiceInquirySection'
import ServiceDetailLayout from '../ServiceInquiryLayout/ServiceDetailLayout'


import inquiryImg from "../../../assets/images/home/newimg.png";
import heroImg from "../../../assets/images/services/coating/coating-hero.png";


const Coating = () => {
  return (
    <>
    {/* <CoatingServiceSection/>
    <ServiceInquirySection/> */}
    <ServiceDetailLayout
      heroSubHeading="Our Services"
      heroHeading="COATING"
      heroImage={heroImg}

      contentHeading="About our coating service"
      contentParagraphs={[
        "Coating provides touch of stylishness & peculiarity to Glass bottle surface. Coating not only amplify the visual appeal of the product but also prevents scratches formation during manufacture handling, cleaning and filling of bottles. Glamor Decor offers variety of coating options like matte, glossy, transparent, opaque, translucent and metallic finishes.",
        "Coating on a glass bottle improves the mechanical properties and reliability of the products, it brings life of the products against scratch & UV rays , moreover coating bring peculiarities in your packaging , Glamour Décor perform a variety of coating methods like Transparent, Glossy, Opaque, Matt, Soft touch & metallizing."
      ]}

      inquiryImage={inquiryImg}
      inquiryApi="/api/inquiry/coating"
    />
    </>
  )
}

export default Coating