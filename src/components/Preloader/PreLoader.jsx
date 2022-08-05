import { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';
// import { motion } from 'framer-motion'
import { ReactComponent as PreloaderSVG } from './ezic.svg';
import './preloader.scss';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    // <AnimateEl>
    <div className="preloader">
        <PreloaderSVG />
      <div className="texts-container">
        <span>Cinéaste,</span>
        <span>Director,</span>
        <span>Motion Designer.</span>
      </div>

      <div className="lightCyan-slider"></div>
      <div className="persianGreen-slider"></div>
      <div className="white-slider"></div>
    </div>
    // </AnimateEl>
  );
};

export default PreLoader;
