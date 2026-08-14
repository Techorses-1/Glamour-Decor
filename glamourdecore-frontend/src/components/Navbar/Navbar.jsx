import React, { useEffect, useState, useRef } from "react"; // Added useRef
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.scss";

import logoWhite from "../../assets/images/logo/white-logo1.png";
import logoColor from "../../assets/images/logo/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/portfolio" || location.pathname === "/career";

  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add ref for the menu panel
  const menuPanelRef = useRef(null);

  /* ================= SCREEN CHECK ================= */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* ================= SCROLL LOGIC ================= */
  useEffect(() => {
    // MOBILE → ALWAYS SCROLLED
    if (isMobile) {
      setScrolled(true);
      return;
    }

    // DESKTOP + NOT HOME → ALWAYS SCROLLED
    if (!isHome) {
      setScrolled(true);
      return;
    }

    // DESKTOP + HOME → TRANSPARENT → SCROLL EFFECT
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    onScroll(); // initial check
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, isMobile]);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* ================= CLICK OUTSIDE TO CLOSE MENU ================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and clicked outside of menu panel
      if (
        menuOpen && 
        menuPanelRef.current && 
        !menuPanelRef.current.contains(event.target) &&
        // Also check if not clicking on menu toggle button
        !event.target.closest('.menu-toggle')
      ) {
        closeMenu();
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    const newMenuOpen = !menuOpen;
    setMenuOpen(newMenuOpen);

    // When opening menu on DESKTOP, open the accordions by default
    if (!isMobile && newMenuOpen) {
      setServiceOpen(true);
      setProductOpen(true);
    }

    // When closing menu on desktop, close the accordions
    if (!isMobile && !newMenuOpen) {
      setServiceOpen(false);
      setProductOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    
    // Also close accordions on desktop when menu closes
    if (!isMobile) {
      setServiceOpen(false);
      setProductOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
        <div className="nav-container">
          {/* LOGO */}
          <NavLink to="/" className="nav-logo-wrap">
            <img
              src={scrolled ? logoColor : logoWhite}
              alt="Logo"
              className="nav-logo"
            />
          </NavLink>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/career">CAREER</NavLink>
            </li>

            <li className="contact-btn">
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>

            <li className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU PANEL - Added ref */}
      <div 
        className={`menu-panel ${menuOpen ? "open" : ""}`} 
        ref={menuPanelRef}
      >
        <div className="menu-scroll">
          <div className="menu-inner">

            <div className="mobile-main-links">
              <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
              <NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink>
              <NavLink to="/portfolio" onClick={closeMenu}>PORTFOLIO</NavLink>
              <NavLink to="/career" onClick={closeMenu}>CAREER</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink>
            </div>

            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => isMobile && setServiceOpen(!serviceOpen)}
              >
                <span>OUR SERVICES</span>
                {isMobile && (
                  <FiChevronDown className={serviceOpen ? "rotate" : ""} /> 
                )}
              </div>

              {serviceOpen && (
                <ul>
                  <li><NavLink to="/coating" onClick={closeMenu}>COATING</NavLink></li>
                  <li><NavLink to="/printing" onClick={closeMenu}>PRINTING</NavLink></li>
                  <li><NavLink to="/foiling" onClick={closeMenu}>FOILING</NavLink></li>
                  <li><NavLink to="/frosting" onClick={closeMenu}>FROSTING</NavLink></li>
                  <li><NavLink to="/decalprint" onClick={closeMenu}>DECAL PRINT</NavLink></li>
                </ul>
              )}
            </div>

            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => isMobile && setProductOpen(!productOpen)}
              >
                <span>SHOP BY PRODUCT</span>
                {isMobile && (
                  <FiChevronDown className={productOpen ? "rotate" : ""} />
                )}
              </div>

              {productOpen && (
                <ul>
                  <li><NavLink to="/clearglassbottle" onClick={closeMenu}>CLEAR GLASS BOTTLES</NavLink></li>
                  <li><NavLink to="/clearglassjar" onClick={closeMenu}>CLEAR GLASS JARS</NavLink></li>
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;