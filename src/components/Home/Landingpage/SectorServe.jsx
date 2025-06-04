// src/components/SectorServe.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/SectorServe.css";

// Images
import packaging from "../../../assets/package.png";
import dna from "../../../assets/dna.png";
import car from "../../../assets/car.png";
import forklift from "../../../assets/forklift.png";
import giftbox from "../../../assets/gift.png";
import health from "../../../assets/healthcare.png";
import school from "../../../assets/school.png";
import tiles from "../../../assets/tiles.png";
import printers from "../../../assets/printer.png";
import manufacture from "../../../assets/manufacturing.png";
import jewellery from "../../../assets/jewelry.png";
import electric from "../../../assets/electric-vehicle.png";
import dinner from "../../../assets/dinner.png";

// Sector data
const sectors = [
  { img: school, title: "EDUCATION & LEARNING", desc: "Explore our diverse sectors and discover how we can help you achieve your goals.", alt: "Education & Learning Sector" },
  { img: packaging, title: "PACKAGING", desc: "Drive brand recognition with targeted campaigns highlighting eco-friendly, custom packaging solutions.", alt: "Packaging Sector" },
  { img: dna, title: "SCIENTIFIC INSTRUMENTS", desc: "Enhance brand visibility through SEO and content marketing tailored for heavy machinery.", alt: "Scientific Instruments Sector" },
  { img: car, title: "AUTOMOTIVE", desc: "Increase sales with targeted campaigns showcasing your automotive products and services.", alt: "Automotive Sector" },
  { img: forklift, title: "FORKLIFTS & CRANES", desc: "We help you grow your agricultural business with custom website designs that showcase your products.", alt: "Forklifts & Cranes Sector" },
  { img: giftbox, title: "CORPORATE GIFTS", desc: "Boost client engagement through campaigns showcasing premium, personalized corporate gifting options.", alt: "Corporate Gifts Sector" },
  { img: health, title: "MEDICAL", desc: "Increase patient engagement with tailored content and targeted advertising for healthcare providers.", alt: "Medical Sector" },
  { img: tiles, title: "TILES & MARBLES", desc: "Boost brand awareness with engaging content tailored for lubricant consumers.", alt: "Tiles & Marbles Sector" },
  { img: jewellery, title: "JEWELLERY", desc: "Increase sales with visually appealing social media campaigns showcasing your jewellery collection.", alt: "Jewellery Sector" },
  { img: electric, title: "CONSTRUCTION", desc: "Generate leads with targeted campaigns showcasing your construction services and projects.", alt: "Construction Sector" },
  { img: dinner, title: "FOOD & BEVERAGES", desc: "Increase brand visibility through SEO strategies focused on culinary experiences and products.", alt: "Food & Beverages Sector" },
  { img: printers, title: "PRINTING", desc: "Boost your printing business with targeted online campaigns to attract new clients.", alt: "Printing Sector" },
];

const SectorServe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-sm-0 text-capitalize mt-2" style={{ color: "#2548BD" }}>
        different sector we serve
      </h2>
      <div className="mx-auto mb-4 mt-3" style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}></div>
      <div className="row">
        {sectors.map((sector, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={sector.title} data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="sector-card h-100">
              {/* Animated Borders */}
              <span className="left-border"></span>
              <span className="top-border"></span>
              <span className="bottom-border"></span>
              <span className="right-border"></span>

              <img src={sector.img} className="sector-card-img" alt={sector.alt} />
              <div className="sector-card-body">
                <h5 className="sector-card-title">{sector.title}</h5>
                <p className="sector-card-text">{sector.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorServe;
