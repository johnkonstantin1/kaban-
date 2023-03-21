import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "../components/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons";
import "./Pricing.css";

function Pricing() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  const questions = [
    "How long does it take to create a website?",
    "How much does it cost to create a website?",
    "What is the process for creating a website?",
    "What types of businesses do you work with?",
    "Do you offer ongoing support and maintenance?",
    "How do you ensure the website is optimized for search engines?",
    "Can you help with content creation?",
    "How do you measure the success of a website?",
  ];

  const answers = [
    "The timeline for creating a website varies depending on the specific needs of each project. We work closely with each client to create a timeline that meets their goals and deadlines. Factors that can impact the timeline include the complexity of the website, the amount of content needed, and the availability of the client for feedback and input.",
    "The cost of creating a website varies depending on the specific needs of each project. We offer a range of pricing plans to meet the needs of businesses of all sizes and budgets. Our pricing is competitive and transparent, with no hidden fees or surprises. Contact us today for a custom quote based on your specific needs.",
    "Our process for creating a website involves several key steps, including discovery, design, development, and launch. During the discovery phase, we work closely with the client to understand their goals, target audience, and unique needs. Next, we create a design concept that accurately reflects the client's brand and message. Once the design is approved, we move into development, where we create the website's functionality and optimize its content for search engines. Finally, we launch the website and provide ongoing maintenance and support to ensure its continued success.",
    "We work with businesses of all sizes and industries, from small startups to large corporations. Our expertise in web development and design allows us to create custom solutions that meet the unique needs of each client. Whether you're looking for a simple brochure website or a complex e-commerce platform, we have the skills and experience to deliver a solution that exceeds your expectations.",
    "Yes, we offer ongoing support and maintenance to ensure the continued success of your website. Our comprehensive maintenance services include regular updates, security checks, and performance optimization to keep your website running smoothly and effectively. We also provide ongoing support and troubleshooting to help you quickly resolve any issues that may arise.",
    "We ensure the website is optimized for search engines by using relevant keywords and phrases throughout the content, optimizing images and videos, and creating a user-friendly experience that encourages visitors to stay on the site and engage with its content. Additionally, we stay up-to-date with the latest SEO best practices and algorithms to ensure the website is always ranking high in search results.",
    "Yes, we can help with content creation, including copywriting, blog posts, and social media content. Our team of experienced writers and marketers work closely with each client to create content that accurately reflects their brand and message and effectively communicates with their target audience. Contact us today to learn more about our content creation services.",
    "We measure the success of a website by tracking key performance indicators (KPIs) such as traffic, engagement, and conversion rates. We provide regular reports and analysis to help each client understand the impact of their website on their business and make informed decisions about future improvements and optimizations.",

  ];

  return (
    <IconContext.Provider value={{ color: "white", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">
              Affordable Pricing for High-Quality Web Development Services
            </h1>
            <div className="pricing__container">
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Basic Plan</h3>
                  <h4>$25</h4>
                  <ul className="pricing__container-features">
                    <li>
                      Get Started with a Stunning Website at an Affordable Price
                    </li>
                    <li>
                      Our Basic Plan is perfect for businesses that are just
                      getting started with their online presence.
                    </li>
                    <li>
                      For just $X per month, you'll get a stunning,
                      professionally designed website that accurately reflects
                      your brand and effectively communicates your message to
                      potential customers.
                    </li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Premium Plan</h3>
                  <h4>$100</h4>
                  <ul className="pricing__container-features">
                    <li>
                      Our Premium Plan is ideal for businesses that require a
                      custom web development solution that meets their specific
                      needs
                    </li>
                    <li>
                      you'll get a dedicated team of developers and designers
                      who will work closely with you to create a website that is
                      tailored to your unique requirements
                    </li>
                    <li>
                      From stunning visual design to seamless functionality,
                      we'll deliver a solution that meets your goals and exceeds
                      your expectations
                    </li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
              <Link to="/contacts" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Pro Plan</h3>
                  <h4>$50</h4>
                  <ul className="pricing__container-features">
                    <li>Maximize Your Online Presence with Our Pro Plan</li>
                    <li>
                      Our Pro Plan is designed for businesses that are serious
                      about driving growth through their online presence.
                    </li>
                    <li>
                      We'll work closely with you to create a website that truly
                      stands out and helps your business succeed.
                    </li>
                  </ul>

                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose this option
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-cont">
        <h2 className="faq-title">FAQ Section</h2>
        <h3 className="faq-title">Answers to Your Most Common Web Development Questions</h3>
        {questions.map((question, index) => (
          <div className ="questions" key={index}>
            <h3 classname="question-title" onClick={() => toggleAnswer(index)}>{question}</h3>
            {selectedQuestion === index && <p className="question-desc">{answers[index]}</p>}
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
