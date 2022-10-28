import React from 'react';
import CV from '../../assets/AbdulrahmanCv.pdf';
import Slide from 'react-reveal/Slide';

const CTA = () => {
  return (
    <div className="cta">
      <Slide left>
        <a href={CV} download className="btn">
          Download CV
        </a>
      </Slide>
      <Slide right>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </Slide>
    </div>
  );
};

export default CTA;
