import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/logo/white-logo1.png";

const Footer = () => {
  const location = useLocation();

  // Check if current path matches the nav link
  const isActive = (path) => {
    // Exact match for home page
    if (path === "/" && location.pathname === "/") {
      return true;
    }

    // For other pages, check if current path starts with the nav path
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }

    return false;
  };

  // Social Media Links
  const socialLinks = {
    instagram: "https://www.instagram.com/glamourdecorlunavadodara/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=61550116506147",
    youtube: "https://www.youtube.com/channel/UC6g82a3mSpQk8MKiZKbcYmA",
    linkedin: "#", // Still coming
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* LEFT - Logo with description text */}
        <div className="footer-left">
          <img src={logo} alt="Glamour Decor" className="footer-logo" />
          
          {/* Brand description text */}
          <div className="footer-brand-text">
            <p>
              We specialize in high-quality glass bottle decoration services 
              for perfume, cosmetic, liquor, and pharmaceutical industries 
              with over 15 years of expertise.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* NAVIGATION - Hidden on mobile */}
          <div className="footer-col nav-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link
                  to="/"
                  className={isActive("/") ? "active" : ""}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive("/about") ? "active" : ""}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={isActive("/portfolio") ? "active" : ""}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className={isActive("/career") ? "active" : ""}
                >
                  CAREER
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? "active" : ""}
                >
                  CONTACT US
                </Link>
              </li>
             
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col contact-col">
            <h4>Contact Details</h4>

            <p>
              <FiPhone />
              <a href="tel:+919952186877">+91 9952186877</a>
            </p>
            <p>
              <FiPhone />
              <a href="tel:+919384370697">+91 9384370697</a>
            </p>

            <p>
              <FiMail />
              <a href="mailto:mahesh@glamourdecor.in">
                mahesh@glamourdecor.in
              </a>
            </p>

            <p>
              <FiMail />
              <a href="mailto:mahesh.glamourdecor@gmail.com">
                mahesh.glamourdecor@gmail.com
              </a>
            </p>
          </div>

          {/* ADDRESS with Social Icons inside */}
          <div className="footer-col address-col">
            <h4>Address</h4>
            <p>
              <FiMapPin />
              <a
                href="https://www.google.com/maps/search/?api=1&query=41+Luna+Rd+Padra+Vadodara+391440"
                target="_blank"
                rel="noreferrer"
              >
                41, Luna Rd, Taluko: Padra, District: Vadodara,
                Pincode: 391440, Gujarat.
              </a>
            </p>

            {/* Social Icons inside Address column for BOTH views - UPDATED WITH LINKS */}
            <div className="footer-social-icons">
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p className="copy-main">
          Copyright © {new Date().getFullYear()} - Glamour Decor
          <span className="desktop-only">
            {" "}Designed by{" "}
            <a
              href="https://techorses.com"
              target="_blank"
              rel="noopener noreferrer"
              className="techorses-link"
            >
              TECHORSES
            </a>
          </span>
        </p>

        <p className="mobile-only">
          Designed by{" "}
          <a
            href="https://techorses.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TECHORSES
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;