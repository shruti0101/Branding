import contactusImage from '../../../assets/contactus.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import "../../../styles/cta.css";

function CtaSection() {
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/shrutiguptabhu@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowToast(true);
        formRef.current.reset(); // clear form
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section className="pt-2 text-white position-relative" style={{ backgroundColor: "#14234B" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center" data-aos="fade-right">
            <img
              src={contactusImage}
              alt="CTA Graphic"
              className="img-fluid cta-image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Form */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="mb-4 fw-bold text-white">Coffee or Beer? It's on us!</h2>
            <p className="text-light mb-4">
              Let’s create something amazing together! Fill out the form below to get started.
            </p>
            <form className="row g-3 cta-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />

              <div className="col-md-6">
                <input type="text" className="form-control input-fill" placeholder="Your name" name="name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control input-fill" placeholder="Enter Your Email" name="email" required />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control input-fill" placeholder="Phone number" name="number" maxLength="10" required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control input-fill" placeholder="Company Name" name="company" />
              </div>
              <div className="col-12">
                <textarea className="form-control input-fill" rows="4" placeholder="Tell us about your project" name="message"></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-outline-light bg-white text-black px-4 py-2 fw-semibold rounded-pill">
                  Get Started Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
          <div className="toast show text-white bg-success border-0">
            <div className="d-flex">
              <div className="toast-body">
                🎉 Form submitted successfully!
                we'll get back to you soon!
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CtaSection;
