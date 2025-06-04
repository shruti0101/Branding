// src/components/Orbit.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/share.png"
import img2 from "../../../assets/share2.png";
import logo from "../../../assets/logoo.jpg";
import bgabout from "../../../assets/bg/bg-wavedown.png";
import "../../../styles/Orbit.css";

const Orbit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      data-aos="fade-down"
      className="bg-orbit"
      style={{
        backgroundImage: `url(${bgabout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container py-4">
 <h2 className="mt-1 fw-bold fs-2 text-center mb-sm-0" style={{ color: "#2548BD"  }}>
          About Us
        </h2>
           <div
        className="mx-auto mb-4 mt-3"
        style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
      ></div>
        <div className="row align-items-center" style={{ minHeight: "60vh" }}>
          {/* Left Side Content */}
          <div
            className="col-lg-6 text-dark"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="fw-bold text-primary mb-3">Promozione-Branding</h2>
            <h5 className="mb-3">
              We are Delhi NCR's top digital marketing agency, dedicated to
              your success
            </h5>
            <p>
              Promozione Branding is a top digital marketing agency in Delhi
              NCR, delivering real, measurable results. Our award-winning team
              specializes in SEO, PPC, Social media, and Web Development to
              boost revenue and generate quality leads.
            </p>
            <p>
              With 100+ professionals and over 10 years of experience, we craft
              tailored strategies focused on driving results that impact your
              bottom line. Your success in the competitive market is our
              priority.
            </p>
            <p>
              We take a client-centric approach, customizing solutions to fit
              your business needs and fuel your online growth.
            </p>
          </div>

          {/* Right Side Orbit */}
          <div
            className="col-lg-6 position-relative d-flex justify-content-center align-items-center"
            style={{ minHeight: "500px" }}
          >
            {/* Central Logo */}
            <div
              className="position-absolute text-center"
              style={{ zIndex: 5 }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                className="rounded-circle d-flex justify-content-center align-items-center mx-auto bg-light"
                style={{
                  width: 120,
                  height: 120,
                  boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={logo}
                  className="rounded-pill"
                  alt="Logo"
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div className="text-danger mt-2 fw-bold">Branding</div>
              <div className="text-muted fw-bold fs-6">
                Driving Innovation Across India
              </div>
            </div>

            {/* Orbit Rings */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`orbit-container orbit-${i}`}
                data-aos="fade-up"
                data-aos-delay={300 + i * 150}
              >
                <div className="orbit">
                  <div className={`orbit-icon orbit-icon-${i}`}>
                    <img
                      src={i % 2 === 0 ? img1 : img2}
                      alt={`icon-${i}`}
                      className="rounded-circle shadow"
                      width="45"
                      height="45"
                    />
                  </div>
                  <div className={`orbit-dot orbit-dot-${i}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orbit;
