
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      {/* Dynamic Gradients */}
      <div 
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(circle at 15% 15%, rgba(28, 136, 234, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 85%, rgba(108, 127, 145, 0.08) 0%, transparent 40%),
            radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.05) 0%, transparent 500px)
          `
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(178, 204, 217, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(178, 204, 217, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      {/* Interactive Spotlight */}
      <div 
        className="absolute w-[800px] h-[800px] pointer-events-none blur-[120px] rounded-full opacity-30 mix-blend-screen"
        style={{
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          background: 'radial-gradient(circle, #1C88EA 0%, transparent 70%)',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default Background;
