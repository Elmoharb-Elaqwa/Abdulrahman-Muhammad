import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

const HeaderSocials = () => {
  return (
    <div className="header___social">
      <Fade left>
        <a
          href="https://www.linkedin.com/in/abdulrahman-muhammad-743393243/"
          target="blank"
        >
          <AiFillLinkedin />
        </a>
      </Fade>
      <Fade left>
        <a href="https://github.com/Elmoharb-Elaqwa" target="blank">
          <AiFillGithub />
        </a>
      </Fade>
      <Fade left>
        <a href="https://www.facebook.com/a.abdo99/" target="blank">
          <BsFacebook />
        </a>
      </Fade>
    </div>
  );
};

export default HeaderSocials;
