import React, { useState, useEffect } from 'react';
import "../../../styles/Faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

const accordionData = [
  {
    title: "Q1: Why is Promozione Branding considered the best digital marketing agency in Delhi NCR?",
    content: "A1: Promozione Branding is regarded as the best digital marketing agency in Delhi NCR because we provide customized digital marketing strategies that drive measurable results. Our expertise spans SEO (Search Engine Optimization Services in Delhi), social media marketing services in India (SMM), pay-per-click (PPC), lead generation, the best website development agency in Delhi NCR, and the top performance branding company in Delhi NCR to help businesses increase their online visibility, engagement, and conversions.",

  },
  {
    title: "Q2: How does Promozione Branding help businesses grow online in Delhi NCR?",
    content: "A2: As a top digital marketing agency in Delhi NCR, we focus on data-driven marketing techniques such as search engine optimization (SEO), targeted best social media campaign services in Delhi, and paid advertising (Google Ads, Facebook Ads, Instagram ads, and more). We ensure businesses gain maximum online exposure and reach potential customers effectively."
  },
  {
    title: "Q3: What industries do you serve as a leading digital marketing company in Delhi NCR?",
    content: "A3: Our expertise spans multiple industries, including real estate, healthcare, e-commerce, education, IT, finance, retail, packaging, printing, lubricants, Jewellery, Manufacturers, and startups. As a trusted digital marketing agency in Delhi NCR, we craft tailored digital strategies that align with industry trends and audience behavior."
  },
  {
    title: "Q4: What makes your SEO strategies unique compared to other agencies in Delhi NCR?",
    content: 'A4: Unlike other agencies, we take a data-first approach to SEO, incorporating keyword research, competitor analysis, on-page and off-page SEO, technical SEO, and local SEO strategies. We aim to rank businesses higher in search results for competitive keywords like best SEO agency in Delhi NCR and "top digital marketing company in India.',

  },
  {
    title: "Q5: Can you improve my business’s local search ranking in Delhi NCR?",
    content: "A5: Yes! We specialize in local SEO for businesses in Delhi NCR, ensuring they rank for geo-targeted keywords such as best SEO services in Connaught Place, top digital marketing agency in South Delhi, and more. We optimize Google My Business (GMB) profiles, citations, and location-based keywords to improve visibility in local searches and Google Maps listings."

  },
  {
    title: "Q6: How does your digital marketing agency in Delhi NCR measure success?",
    content: " A6: We track performance using Google Analytics, keyword ranking reports, lead conversion rates, and engagement metrics. Our data-driven reporting helps businesses in Delhi NCR evaluate campaign effectiveness and make informed marketing decisions."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-section mt-3">
        <h2 className=" fw-bold text-center mb-sm-0" style={{ color: "#2548BD"  }}>
          Frequently Asked Questions
        </h2>
      </div>
      <div
        className="mx-auto mb-4 mt-3"
        style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
      ></div>
      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div
            className="accordion-item"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            data-aos-duration="900"
          >
            <button
              className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className='fw-bold'>{item.title}</span>
              <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
