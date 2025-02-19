
import "./End.css";
import logo from "../assets/logo.jpg";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const End = () => {
    return (
        <footer className="footer">
            <div className="sub-footer">
                <div className="end-logo">
                    <img src={logo} alt="Logo" />
                    <h3>Logoipsum</h3>
                </div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Service</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social-media">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default End;
