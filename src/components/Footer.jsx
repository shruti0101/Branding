import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import "../styles/Footer.css";

const FooterContent = () => {
  return (
    <div className="container-fluid m-0 p-0 footer-bg">
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Marketing</h3>
            <ul>
              <li>
                <Link to="/social-media">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/viral-marketing">Viral Marketing</Link>
              </li>
              <li>
                <Link to="/hashtag-marketing">Hashtag Marketing</Link>
              </li>
              <li>
                <Link to="/meme-marketing">Meme Marketing</Link>
              </li>
              <li>
                <Link to="/youtube-marketing">YouTube Marketing</Link>
              </li>
              <li>
                <Link to="/influencer-marketing">Influencer Marketing</Link>
              </li>
              <li>
                <Link to="/seo">Search Engine Optimization</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Advertising</h3>
            <ul>
              <li>
                <Link to="/lead-generation">Lead Generation</Link>
              </li>
              <li>
                <Link to="/google-facebook-ads">Google / Facebook Ads</Link>
              </li>
              <li>
                <Link to="/ppc">Pay Per Click (PPC)</Link>
              </li>
              <li>
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/reviews">Google Facebook Reviews</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Designing</h3>
            <ul>
              <li>
                <Link to="/logo-design">Logo Design</Link>
              </li>
              <li>
                <Link to="/website-design">Website Design</Link>
              </li>
              <li>
                <Link to="/graphic-design">Graphic Design</Link>
              </li>
              <li>
                <Link to="/content-writing">Content Writing</Link>
              </li>
              <li>
                <Link to="/viralcard">Viralcard</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column get-in-touch mr-lg-5">
            <h3>Get in Touch</h3>
            <p>
              <FaMapMarkerAlt className="me-2" /> Promozione Branding Pvt. Ltd.
            </p>
            <p>123 Creative Street, Sector 45</p>
            <p>Gurgaon, Haryana, India</p>
            <p>
              <FaPhone className="me-2" /> +91-9876543210
            </p>
            <p>
              <FaEnvelope className="me-2" /> info@promozione.in
            </p>
            <p>
              <a
                href="https://www.linkedin.com/company/promozione-branding/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
            </p>
            <a
              href="/brochure.pdf" // <-- match the actual filename
              download
              className="nav-btn mt-2 d-inline-block text-white"
              style={{
                backgroundColor: "#2548BD",
                padding: "8px 16px",
                borderRadius: "5px",
                textDecoration: "none",
                marginTop: "10px",
              }}
            >
              <FaDownload className="me-2" />
              Download Brochure
            </a>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p className="m-0">Promozione Branding © 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterContent;
