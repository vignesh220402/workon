import image1 from '../assets/img con2.png';
import image2 from '../assets/image con1.png';
import image3 from '../assets/image con3.png';
import image4 from '../assets/img con4.png';
import { Link } from 'react-router-dom';
import './ocss.css';

const Oservices = () => {
    return (
        <div>
            <div className="serviceintro">
                <h1 className='h1tag'>Services</h1>
                <p>At Marketing Mastery Online, we offer a comprehensive range of digital marketing
                    <br />solutions designed to elevate your brand and drive measurable results.</p>
            </div>
            <div className="main-img">
                <div className="firsttwo">
                    <div className="img1">
                        <div className="titles">
                            <h4 style={{ width: "238px", fontSize: "31px", position: "relative", bottom: "35px" }}>Search Engine Optimization</h4>
                        </div>
                        <Link to="/services" className='linkage' style={{ color: "black" }}><span className='dark-arrow' style={{ backgroundColor: "black", color: "white",fontWeight:"400",width:"100px"  }}>➔</span> Learn More</Link>
                        <img src={image2} alt="" />
                    </div>
                    <div className="img2">
                        <div className="titles">
                            <h4 style={{ width: "238px", fontSize: "28px", position: "relative", bottom: "35px" }}>Email Marketing</h4>
                        </div>
                        <Link to="/services" className='linkage' style={{ color: "white" }}><span className='dark-arrow' style={{ backgroundColor: "white", color: "black",fontWeight:"400",width:"100px"  }}>➔</span> Learn More</Link>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="secondtwo">
                    <div className="img3">
                        <div className="titles">
                            <h4 style={{ width: "238px", fontSize: "31px", position: "relative", bottom: "35px" }}>Social Media Marketing</h4>
                        </div>
                        <Link to="/services" className='linkage' style={{ color: "white" }}><span className='dark-arrow' style={{ backgroundColor: "white", color: "black",fontWeight:"400",width:"100px"  }}>➔</span> Learn More</Link>
                        <img src={image3} alt="" />
                    </div>
                    <div className="img4">
                        <h4 style={{ width: "238px", fontSize: "31px", position: "relative", bottom: "35px" }}>Content Marketing</h4>
                        <Link to="/services" className='linkage' style={{ color: "black" }}><span className='dark-arrow' style={{ backgroundColor: "black", color: "white",fontWeight:"400" ,width:"100px"}}>➔</span> Learn More</Link>
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Oservices;
