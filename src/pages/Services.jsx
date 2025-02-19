
import './Services.css';
import seoImg from '../assets/emp con1.png';
import emailMarketingImg from '../assets/image con1.png';
import socialMediaImg from '../assets/image con3.png';
import contentMarketingImg from '../assets/img con2.png';

const services = [
  {
    img: seoImg,
    title: 'Search Engine Optimization',
    description: 'Improve your website visibility and attract organic traffic using cutting-edge SEO strategies.'
  },
  {
    
    title: 'Email Marketing',
    description: 'Enhance your website visibility and organic traffic through targeted email marketing campaigns.',
    img: emailMarketingImg
  },
  {
    img: socialMediaImg,
    title: 'Social Media Marketing',
    description: 'Connect with your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn.'
  },
  {
    img: contentMarketingImg,
    title: 'Content Marketing',
    description: 'Provide value to your audience and position your brand as an industry leader with high-quality content.'
  }
];

const Services = () => {
  return (
    <>
    <h1 className='service'>Our Services</h1>
    <p className='ptag'>At Marketing Mastery Online, we offer a comprehensive range of digital marketing solutions designed to elevate your brand and drive measurable results.</p>
    <div className="services-container">
    
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.img} alt={service.title} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
        
      ))}
    </div>
    </>
  );
};

export default Services;
