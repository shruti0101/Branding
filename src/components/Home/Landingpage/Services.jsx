import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../../styles/Services.css";

import Slider from "../../Slider";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const serviceCards = [
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing Agency",
      text: "Looking for More Customers Online? You’ve come to the right place – We’re the Best Digital Marketing Agency in Delhi",
      linkText: "Let’s Plan Your Growth",
      link: "/services/ai-digital",
      highlights: [
        "Google Ads & Social Media Ads – Get more calls, leads & sales.",
        "SEO (Rank on Google) – Be seen when people search for your business.",
        "Instagram & Facebook Marketing – Get noticed. Get followers. Get customers.",
        "Website That Sells – Mobile-friendly, fast, and built to convert.",
        "Content & Email Marketing – Keep your customers coming back.",
      ],
      benefits: [
        "No big promises. Just real results.",
        "Friendly team.",
        "Plans that fit your budget.",
        "You’ll know exactly what we’re doing — no hidden stuff.",
        "First call is FREE — ask us anything!",
      ],
    },
    {
      icon: "fas fa-laptop-code",
      title: "Website Designing and Development",
      text: "We create fast, modern, and mobile-friendly websites that help you grow your business",
      linkText: "I Need a Website – Help Me!",
      link: "/services/ai-digital",
      highlights: [
        "Custom Website Design (No boring templates)",
        "Mobile & SEO-Friendly",
        "Fast Loading Speed",
        "Easy to Use & Manage",
        "E-commerce & Business Websites",
        "Complete Support & Maintenance",
      ],
      benefits: [
        "100% unique design tailored to your business.",
        "Designed to get you leads & sales.",
        "Friendly Delhi-based team.",
        "Super affordable packages.",
        "We explain everything in simple language",
      ],
    },
    {
      icon: "fas fa-bullhorn",
      title: "Pay Per Click Advertising",
      text: "We run powerful Google Ads and Social Media Ads that bring you real customers",
      linkText: "Let’s Plan Your Campaign (Free)",
      link: "/services/ai-digital",
      highlights: [
        "Google Ads & Facebook/Instagram Ads",
        "Keyword & Audience Targeting",
        "Ad Copywriting That Sells.",
        "Budget Optimization (More results, less spend)",
        "Daily Monitoring & Weekly Reports.",
        "Landing Pages That Convert Visitors into Customers",
      ],
      benefits: [
        "Quick setup – start getting leads fast.",
        "Certified ad experts managing your campaigns.",
        "Transparent reports – know where your money goes.",
        "Affordable for small and growing businesses.",
        "We don’t just run ads – we focus on results",
      ],
    },
    {
      icon: "fas fa-shopping-cart",
      title: "Shopping Ads",
      text: "We create and manage Shopping Ads that put your products in front of shoppers",
      linkText: "Launch My Shopping Ads",
      link: "/services/ai-digital",
      highlights: [
        "Setup & Optimization of Google Shopping Campaigns",
        "Product Feed Management & Updates",
        "Targeted Ads for Buyers Ready to Purchase",
        "Competitive Bidding to Maximize ROI",
        "Regular Performance Reports",
        "Expert Support to Grow Your Sales",
      ],
      benefits: [
        "Get your products seen by thousands of buyers.",
        "Pay only for clicks that bring real customers.",
        "Transparent, easy-to-understand reports.",
        "Affordable plans tailored to your budget.",
        "Local Delhi team you can trust",
      ],
    },
    {
      icon: "fas fa-cube",
      title: "CGI Ads",
      text: "Our CGI Ads use high-quality 3D visuals and animations to showcase your products",
      linkText: "Showcase My Product in 3D",
      link: "/services/ai-digital",
      highlights: [
        "Eye-catching 3D product animations",
        "Realistic and detailed product visuals",
        "Ads that stand out on social media & websites",
        "Custom scenes tailored to your brand",
        "Faster turnaround than traditional photo shoots",
        "Perfect for products hard to shoot or in early stages",
      ],
      benefits: [
        "Make your product the star of every ad.",
        "Impress customers with stunning visuals.",
        "More clicks, more engagement, more sales.",
        "Friendly team with deep CGI experience.",
        "Based right here in Delhi — easy to connect",
      ],
    },
    {
      icon: "fas fa-ad",
      title: "Google Ads",
      text: "We create and manage Google Ads campaigns that bring you real customers",
      linkText: "Chat with Our Google Ads Team",
      link: "/services/ai-digital",
      highlights: [
        "Targeted Google Search & Display Ads",
        "Smart Keyword Research & Ad Writing",
        "Budget-Friendly Campaigns",
        "Daily Monitoring & Optimization",
        "Detailed Monthly Reports",
        "Expert Support from Our Delhi Team",
      ],
      benefits: [
        "Reach customers exactly when they’re searching for you online.",
        "Pay only for clicks that matter.",
        "Transparent and easy-to-understand reports",
        "Fast results with proven strategies.",
        "Friendly local experts who care about your success",
      ],
    },
  ];

  return (
    <>
      <section className="mt-4  ">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h1>Complete AI Digital Marketing Services Delhi</h1>
            <h3>Our Strategies that Drive Web Traffic & Results</h3>
          </div>

          <div className="row">
            {serviceCards.map((card, index) => (
              <div
                className="col-md-4 col-sm-12"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card text-center mb-4">
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center mb-3 mt-3">
                      <i className={`${card.icon} fs-2 text-primary`}></i>
                    </div>
                    <h2 className="card-title text-center">{card.title}</h2>
                    <p className="card-text text-center">{card.text}</p>
                    <h5>What You Get:</h5>
                    <ul className="text-start">
                      {card.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <h5>Why Choose Us?</h5>
                    <ul className="text-start">
                      {card.benefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <Link to={card.link} className="text-sm nav-btn">
                      {card.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default Services;
