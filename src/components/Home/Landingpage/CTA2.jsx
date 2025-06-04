import React from 'react';
import '../../../styles/Cta2.css';
import ctaImage from '../../../assets/CTAIMG.png'; 

const Cta2 = () => {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 text-white">
            <h2 className="fw-bold mb-3">
            Get your Brands Ranked<br />
              Starting at <span className="highlight-price"> xyz</span> per month.
            </h2>
            <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
              Request a Free Proposal
            </button>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img src={ctaImage} alt="Business" width={"90%"} className="img-fluid rounded" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta2;
