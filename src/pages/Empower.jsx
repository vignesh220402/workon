import imageOne from '../assets/emp con1.png'
import './Empower.css'
const Empower = () => {
    return (
        <div className='main-emp'>
            <div className="main-e">
                <h1>Empower Your Success</h1>
                <p>At Marketing Mastery Online, our mission is to empower your success in the digital realm. We are dedicated to providing you with the tools, strategies, and support you need to thrive in todays competitive landscape.</p>
                <button className="empbtn">Contact us</button>
            </div>
            <div className="img">
                <img src={imageOne} className="insert" alt="" />
            </div>
        </div>
    )
}

export default Empower