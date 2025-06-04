import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../styles/CustomCursor.css"; // 

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
        duration: 0.2,
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, {
        scale: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: '#fff',
        duration: 0.2,
        ease: 'power1.out',
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: 'rgba(0, 128, 255, 0.2)',
        borderColor: '#00aaff',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const addHoverEffect = () => {
      document.querySelectorAll('button, a').forEach((el) => {
        el.addEventListener('mouseenter', () =>
          gsap.to(cursorRef.current, { scale: 1.5, duration: 0.2 })
        );
        el.addEventListener('mouseleave', () =>
          gsap.to(cursorRef.current, { scale: 1, duration: 0.2 })
        );
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    addHoverEffect();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
}

export default CustomCursor;
