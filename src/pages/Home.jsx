
import './Home.css'; // Import the CSS file for styling
import myImage from '../assets/Screenshot 2025-02-17 194014.png'
import logo1 from '../assets/logoipsum-263-2svg_1707124491_25699.svg'
import logo2 from '../assets/logoipsum-264-1-1svg_1707124450_97049.svg'
import logo3 from '../assets/untitledsvg_1707124275_60485.svg'
import logo4 from '../assets/logoipsum-216-1svg_1707124621_84308.svg'
import logo5 from '../assets/logoipsum-218-3svg_1707124523_61876.svg'
import logo6 from '../assets/logoipsum-217-2svg_1707124541_79700.svg'
import Oservices from './Oservices';
import Empower from './Empower';
import { Link } from 'react-router-dom';
import CaseStudy from './Casestuday';
import Testimonial from './tertimonial';



const Home = () => {
  return (
    <>

      <section className="main-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h1>Marketing Mastery Online</h1>
            <p>At Marketing Mastery Online, we are dedicated to helping businesses achieve unparalleled success in the digital realm.With our comprehensive suite of services, we empower you to dominate the  online landscape and connect with your target audience in<br />meaningful ways.</p>
            <Link to="/contact" className="contacthome">Contact Us</Link>
          </div>
          <div className="intro-image">
            <img src={myImage} alt="Marketing" />
          </div>
        </div>
      </section>
      <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
      <Oservices />
      <Empower />
      <CaseStudy />
      <Testimonial />
    </>
  );
}

export default Home;
