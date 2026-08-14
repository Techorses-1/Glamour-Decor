import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import PortfolioHero from './PortfolioHero/PortfolioHero'
import PortfolioCapabilities from './PortfolioCapabilities/PortfolioCapabilities'
import ContactCtaSection from '../About/ContactCtaSection/ContactCtaSection'
import CheckoutOurWork from './CheckoutOurWork/CheckoutOurWork'

const Portfolio = () => {
  const location = useLocation();
  const checkoutSectionRef = useRef(null);
  
  // Function to get query parameter
  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };
  
  const serviceFromQuery = getQueryParam('service');
  
  // Auto-scroll to CheckoutOurWork section when service query param exists
  useEffect(() => {
    if (serviceFromQuery && checkoutSectionRef.current) {
      setTimeout(() => {
        // Get navbar height (adjust selector based on your navbar class/id)
        const navbar = document.querySelector('header, nav, .navbar, .header');
        const navbarHeight = navbar ? navbar.offsetHeight : 75; // Default 75px
        
        // Get the element position
        const element = checkoutSectionRef.current;
        const elementPosition = element.getBoundingClientRect().top;
        
        // Calculate scroll position with navbar offset
        // REDUCED OFFSET: Just navbarHeight (no extra padding)
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        // OR for even higher position (less offset):
        // const offsetPosition = elementPosition + window.pageYOffset - (navbarHeight - 10);
        
        // Scroll to position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150); // Slightly longer delay
    }
  }, [serviceFromQuery]);
  
  return (
    <>
      <PortfolioHero/>
      <PortfolioCapabilities/>
      <div ref={checkoutSectionRef}>
        <CheckoutOurWork initialService={serviceFromQuery} />
      </div>
      <ContactCtaSection/>
    </>
  )
}

export default Portfolio