
import imagec1 from '../assets/cotes con1.png';
import face1 from '../assets/face1.jpg'
import face2 from '../assets/1840x833svg_1681652117_37029jm0p_1697108874_66441.jpg'
import './terti.css';

const Testimonial = () => {
    return (
        <div>
            <div className="maincard">
                <div className="card1">
                    <img src={imagec1} alt="Testimonial 1" />
                    <p>“All the features you need and none you don’t. The simplicity of the tool, helped us become more productive and our customer satisfaction rates skyrocketed”</p>
                    <div className="face">
                        <img src={face2} alt="" />
                        <h3>Eric Balmer <br /><p>VP of Marketing Pied Piper</p></h3>
                    </div>
                </div>
                <div className="card1">
                    <img src={imagec1} alt="Testimonial 2" />
                    <p>“All the features you need and none you don’t. The simplicity of the tool, helped us become more productive and our customer satisfaction rates skyrocketed”</p>
                    <div className="face">
                        <img src={face1} alt="" />
                        <h3>Steven Smith <br /> COO Hooli</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
