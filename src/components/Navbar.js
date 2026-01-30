import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Header Bar */}
      <div className="top-header">
        <div className="top-header-container">
          <div className="top-header-info">
            <a href="tel:+91XXXXXXXXXX" className="top-header-item">
              <span className="top-header-icon">📞</span>
              <span>+91 XXX XXX XXXX</span>
            </a>
            <a href="mailto:info@exobase.com" className="top-header-item">
              <span className="top-header-icon">📧</span>
              <span>info@exobase.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img 
              src="/images/logo.png" 
              alt="Exobase Private Limited" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const textContainer = e.target.nextSibling;
                if (textContainer) {
                  textContainer.style.display = 'flex';
                }
              }}
            />
            <div className="logo-text-container">
              <span className="logo-text">Exobase</span>
              <span className="logo-subtitle">Private Limited</span>
            </div>
          </Link>
          
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={isActive('/products') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="navbar-right">
            <Link 
              to="/contact" 
              className="btn-enquiry"
            >
              Enquiry Now
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
