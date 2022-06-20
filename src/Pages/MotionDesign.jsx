import React from 'react';
import ReactPlayer from 'react-player';

const videoLinks = [
  'https://youtu.be/cVGDoQuRpao',
  'https://vimeo.com/646164198',
  'https://youtu.be/vIY9s7BeIQA',
  'https://vimeo.com/649881148',
  'https://youtu.be/cVGDoQuRpao',
];

const MotionDesign = () => {
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
