import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import FixedImageSection from './FixedImageSection/FixedImageSection'
import ContactCtaSection from './ContactCtaSection/ContactCtaSection'
import "./About.scss" ;

const About = () => {
  return (
    <>
    <div className='about'>
    <AboutUs/>
    <FixedImageSection/>
    <ContactCtaSection/>
    </div>
    </>
  )
}

export default About