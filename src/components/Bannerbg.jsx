import React, { useEffect, useRef } from 'react';
import '../styles/Bannerbg.css';
import im1 from '../../src/assets/bg/boll1.webp';
import im2 from '../assets/bg/boll2.webp';

export default function HeroSection() {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sway = Math.sin(scrollY * 0.01) * 5;

      if (ball1Ref.current && ball2Ref.current) {
        ball1Ref.current.style.transform = `translateX(-50%) translateY(${sway}px) rotate(360deg)`;
        ball2Ref.current.style.transform = `translateX(-50%) translateY(${-sway}px) rotate(720deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='container-fluid m-0 p-0'>

    <section className="hero-section  d-flex align-items-center justify-content-center">
      <div className="hero-overlay" />
      <div className="hero-content text-center">
        
        <h1 className="hero-title text-start">AI Artificial Intelligence & AI Technology</h1>
        <img src={im1} alt="glow1" className="glow-ball ball1" ref={ball1Ref} />
        <img src={im2} alt="glow2" className="glow-ball ball2" ref={ball2Ref} />
      </div>
    </section>
    </div>
  );
}
