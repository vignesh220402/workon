
import blog1 from '../assets/205ok_-1png_1707894999_50357.png';
import blog2 from '../assets/emp con1.png'
import blog3 from '../assets/img con2.png'
import blog4 from '../assets/image con3.png'
import blog5 from '../assets/img con4.png'
import blog6 from '../assets/about us.png'
import './BlogSection.css'
import End from './End';
const BlogSection = () => {
    const blogPosts = [
        {
            imgSrc: blog1,
            title: "The Importance of SEO in Digital Marketing",
            description: "Dive into the world of search engine optimization (SEO) and discover why it's crucial for increasing your website's visibility and attracting organic traffic."
        },
        {
            imgSrc: blog2,
            title: "Email Marketing Strategies to Boost Engagement",
            description: "Explore the power of email marketing and discover proven strategies to engage your audience, nurture leads, and drive conversions."
        },
        {
            imgSrc: blog3,
            title: "Social Media Trends to Watch in 2024",
            description: "Stay ahead of the curve with the latest social media trends shaping the digital landscape. Learn about emerging platforms."
        },
        {
            imgSrc: blog4,
            title: "The Power of Video Marketing",
            description: "Discover the impact of video marketing in today's digital landscape and how leveraging it to captivate your audience and convey your brand's message effectively."
        },
        {
            imgSrc: blog5,
            title: "Harnessing the Potential of Influencer Marketing",
            description: "Dive into the world of influencer marketing and learn how to leverage the influence of key personalities in your industry to reach new audiences and build credibility for your brand."
        },
        {
            imgSrc: blog6,
            title: "Building Brand Authority through Thought Leadership",
            description: "Learn how to position yourself as a thought leader in your industry and build credibility for your brand through insightful content and thought-provoking insights."
        }
    ];

    return (
        <>
            <div className="blog-section">
                <h1>Our Blog</h1>
                <p>Welcome to our blog, where we strive to provide you with valuable insights and inspiration to unlock your full potential in the digital realm.</p>
                <div className="blog-posts-container">
                    {blogPosts.map((post, index) => (
                        <div className="blog-post" key={index}>
                            <img src={post.imgSrc} alt={post.title} />
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <End />
        </>
    );
};


export default BlogSection