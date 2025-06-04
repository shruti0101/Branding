import React, { useEffect, useState } from "react";
import '../styles/ScrollTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top-btn btn btn-primary ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTop;
