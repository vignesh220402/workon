import image1 from '../assets/img con2.png'
import image2 from '../assets/image con1.png'
import image3 from '../assets/image con3.png'
import image4 from '../assets/img con4.png'
import { Link } from 'react-router-dom';

import './ocss.css'
const Oservices = () => {
    return (
        <div>
            <div className="serviceintro">
                <h1 className='h1tag'>Services</h1>
                <p>At Marketing Mastery Online, we offer a comprehensive range of digital marketing solutions designed to elevate your brand and drive measurable results.</p>
            </div>
            <div className="main-img">
                <div className="img1">
                    <h4>Search Engine Optimization</h4>
                    <Link to="/services">learn More  &gt;&gt;</Link>
                    <img src={image2} alt="" />
                </div>
                <div className="img2">
                    <h4>Email Marketing</h4>
                    <Link to="/services">learn More  &gt;&gt;</Link>
                    <img src={image1} alt="" />
                </div>
                <div className="img3">
                    <h4>Social Media Marketing</h4>
                    <Link to="/services">learn More  &gt;&gt;</Link>
                    <img src={image3} alt="" />
                </div>
                <div className="img4">
                    <h4>Content Marketing</h4>
                    <Link to="/services">learn More  &gt;&gt;</Link>
                    <img src={image4} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Oservices