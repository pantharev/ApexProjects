import React, { useRef, useEffect } from 'react';

export default function Sun() {
  const sunRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      sunRef.current.style.left = `${e.pageX - 50}px`;
      sunRef.current.style.top = `${e.pageY - 50}px`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="sun" ref={sunRef} style={{ pointerEvents: 'none' }}></div>
  );
}