"use client"
import React from 'react';
import LogoCarousel from './logoCarousel';

interface LogoItem {
  src: string;
  alt: string;
}

const logos: LogoItem[] = [
  { src: '/images/referenceslogos/ami.png', alt: 'ami' },
  { src: '/images/referenceslogos/elemente-clemente.png', alt: 'elemente clemente' },
  { src: '/images/referenceslogos/galeries-lafayette.png', alt: 'galeries lafayette' },
  { src: '/images/referenceslogos/grasegger.png', alt: 'grasegger' },
  { src: '/images/referenceslogos/hempAge.png', alt: 'hempAge' },
  { src: '/images/referenceslogos/mimoska.png', alt: 'mimoska' },
  { src: '/images/referenceslogos/NEBO.png', alt: 'NEBO' },
  { src: '/images/referenceslogos/nudeproject.png', alt: 'nudeproject' },
  { src: '/images/referenceslogos/oui.png', alt: 'oui' },
  { src: '/images/referenceslogos/paul&shark.png', alt: 'paul&shark' },
  { src: '/images/referenceslogos/stone-island.png', alt: 'stone-island' },
  { src: '/images/referenceslogos/the-lighthouse.png', alt: 'the-lighthouse' },
  { src: '/images/referenceslogos/tonies.png', alt: 'tonies' },
  { src: '/images/referenceslogos/ami.png', alt: 'ami' },
  { src: '/images/referenceslogos/elemente-clemente.png', alt: 'elemente clemente' },
  { src: '/images/referenceslogos/galeries-lafayette.png', alt: 'galeries lafayette' },
  { src: '/images/referenceslogos/grasegger.png', alt: 'grasegger' },
  { src: '/images/referenceslogos/hempAge.png', alt: 'hempAge' },
  { src: '/images/referenceslogos/mimoska.png', alt: 'mimoska' },
  { src: '/images/referenceslogos/NEBO.png', alt: 'NEBO' },
  { src: '/images/referenceslogos/nudeproject.png', alt: 'nudeproject' },
  { src: '/images/referenceslogos/oui.png', alt: 'oui' },
  { src: '/images/referenceslogos/paul&shark.png', alt: 'paul&shark' },
  { src: '/images/referenceslogos/stone-island.png', alt: 'stone-island' },
  { src: '/images/referenceslogos/the-lighthouse.png', alt: 'the-lighthouse' },
  { src: '/images/referenceslogos/tonies.png', alt: 'tonies' }
];

const LogoScroll: React.FC = () => {
  return (
    <div>
      <LogoCarousel logos={logos} />
    </div>
  );
};

export default LogoScroll;
