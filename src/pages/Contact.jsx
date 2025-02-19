
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Location</h3>
          <p>123 Sample St, Sydney NSW 2000 AU</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>hello@company.com</p>
        </div>
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <h3>Phone</h3>
          <p>+1 987 456 321</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Our friendly team would love to hear from you.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Type your message..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
