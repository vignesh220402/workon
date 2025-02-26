// CaseStudy.js

import { Link } from 'react-router-dom';
import './Casestudy.css';

const CaseStudy = () => {
    return (
        <>
            <div className="topic">
                <h1>Case study</h1>
                <p>At Marketing Mastery Online, we believe in showcasing real-world results to <br /> demonstrate the effectiveness of our strategies.</p>
            </div>
            <div className="case-study">
                <div className="case-study-section">
                    <p>EcoTrends approached us with several challenges, including low website traffic, stagnant sales, and limited brand visibility in a crowded market.</p>
                    <Link to="/services/seo" className='link'>Learn More &gt;&gt;</Link>
                </div>

                <div className="c-line"></div>
                <div className="case-study-section">

                    <p>To address EcoTrends challenges, we developed a comprehensive strategy focused on increasing brand awareness, driving targeted traffic to their website,</p>
                    <Link to="/services/strategy" className='links'>Learn More &gt;&gt;</Link>
                </div>

                <div className="c-line"></div>
                <div className="case-study-section">
                    <p>Additionally, we leveraged social media platforms to showcase EcoTrends products, engage with their audience, and drive traffic to their website.
                    </p>
                    <Link to="/services/social-media" className='link'>Learn More &gt;&gt;</Link>
                </div>
            </div>
        </>
    );
};

export default CaseStudy;
