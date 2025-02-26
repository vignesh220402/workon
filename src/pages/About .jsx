
import "./About.css";


const SinglePage = () => {
  return (
    <div className="single-page">
      <header className="header">
        <h1>Welcome to Marketing Mastery Online!</h1>
        <p className="description">
          We are a dedicated team of digital marketing experts passionate about helping businesses thrive in the ever-evolving online landscape. With a focus on innovation, creativity, and results-driven strategies, we empower our clients to unlock their full potential and achieve their goals in the digital age.
        </p>
        <div className="client-satisfaction">
          <span>100+</span> Satisfied Clients
        </div>
    
      </header>
      <section className="mission">
        <h2>Mission</h2>
        <p>
          At Marketing Mastery Online, our mission is simple: to empower businesses to succeed in the digital realm. We believe that every business has the potential to thrive online with the right guidance and expertise. Our goal is to provide tailored solutions and unparalleled support to help our clients navigate the complexities of digital marketing and achieve remarkable results.
        </p>
      </section>
      <section className="offerings">
        <h2>What we can offer you!</h2>
        <div className="offerings-container">
          <div className="offering-item">
            <h3>Customized Strategies for Your Business Goals</h3>
            <p>Tailored Digital Marketing Solution</p>
          </div>
          <div className="offering-item">
            <h3>Personalized Assistance Every Step of the Way</h3>
            <p>Expert Guidance and Support</p>
          </div>
          <div className="offering-item">
            <h3>Tangible Success Stories and Measurable Returns</h3>
            <p>Proven Results and ROI</p>
          </div>
        </div>
      </section>
  
    </div>
  );
};

export default SinglePage;
