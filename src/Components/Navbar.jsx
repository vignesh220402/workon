import './Navbar.css'; // Assuming you have a CSS file for styling
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <h3>Logoipsum</h3>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? '❌' : '☰'} {/* Change between X and hamburger icon */}
        </button>
        <div id="anchor" className={`navbar-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/Blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          <Link to="/contact" className="contact-button" onClick={toggleMenu}>Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
