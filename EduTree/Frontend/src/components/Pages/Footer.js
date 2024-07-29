import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__about">
          <h3 className="footer__title">About Us</h3>
          <p>We are dedicated to helping you achieve your academic goals. Our platform offers personalized course plans and progress tracking to ensure you stay on track. Join us on your journey to brighter future.</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__title">Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#call-to-action">Get Started</a></li>
            <li><a href="/workout">Courses</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3 className="footer__title">Contact Us</h3>
          <ul>
            <li>Email: support@edutree.com</li>
            <li>Phone: +91 9087651234</li>
            <li><a href="https://www.instagram.com/edutreee" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 EDUTREE . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
