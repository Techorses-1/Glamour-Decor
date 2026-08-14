import React from 'react'
import ContactHero from './ContactHero/ContactHero'
import "./Contact.scss" ;
import ContactSection from './ContactSection/ContactSection';

const Contact = () => {
  return (
    <>
     <div className='contact'>
    <ContactHero/>
    <ContactSection/>
    </div>
    </>
  )
}

export default Contact