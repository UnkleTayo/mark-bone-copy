import React from 'react';
import ReactPlayer from 'react-player';
import { useMediaQuery } from '../hooks/useMediaQuery';

const videoLinks = [
  'https://youtu.be/cVGDoQuRpao',
  'https://vimeo.com/646164198',
  'https://youtu.be/vIY9s7BeIQA',
  'https://vimeo.com/649881148',
  'https://youtu.be/cVGDoQuRpao',
];

const MotionDesign = () => {
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <div className="Motions">
      {videoLinks.map((link) => (
        <div key={link} className="motion">
          <ReactPlayer url={link} />
        </div>
      ))}
    </div>
  );
};

export default MotionDesign;
