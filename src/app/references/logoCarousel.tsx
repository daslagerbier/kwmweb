import React, { useRef, useEffect } from 'react';
import Logo from './logo'; // Assuming you have a Logo component

interface LogoItem {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: LogoItem[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
      }
    }, 50); // Adjust the speed of scrolling here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 bg-white">
      <div ref={containerRef} className="inline-flex">
        {logos.map((logo, index) => (
          <Logo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
