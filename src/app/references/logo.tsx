import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-20 h-20 mx-4" />;
};

export default Logo;
