import React, { useEffect } from 'react';
import anime from 'animejs';

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });
    loader.add({
      targets: "#logo",
      delay: 500,
      scale: 3,
      duration: 800,
      easing: "easeInOutElastic",
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <img id="logo" src="images/logo/logokwm.svg" alt="Logo" className="w-20 h-20" />
    </div>
  );
};

export default SplashScreen;