import './Navbar.css'; // Assuming you have a CSS file for styling
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/logoluumi.jpg'; // Corrected the path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={mylogo} alt="Logo" />
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? '❌' : '☰'} {/* Toggle between X and hamburger icon */}
        </button>
        <div className={`navbar-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <Link to="/contact" className="contact-button" onClick={closeMenu}>Contact Us</Link>
 {/* Cancel button */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


