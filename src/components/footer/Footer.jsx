import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <Slide left>
        <a href="#" className="footer___logo">
          Abdulrhman
        </a>
      </Slide>
      <Slide left>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#experience"> Experience</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#portfolio"> Portfolio</a>
          </li>
          <li>
            <a href="#testimonials"> Testimonials</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </Slide>
      <Slide right>
        <div className="footer___socials">
          <a
            href="https://www.linkedin.com/in/abdulrahman-muhammad-743393243/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Elmoharb-Elaqwa" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.facebook.com/a.abdo99/" target="blank">
            <BsFacebook />
          </a>
        </div>
      </Slide>
      <Slide bottom>
        <div className="footer___copyright">
          <small>&copy; Abdulrhman Portfolio. All rights reserved.</small>
        </div>
      </Slide>
    </footer>
  );
};

export default Footer;
