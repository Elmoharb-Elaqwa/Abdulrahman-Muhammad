import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Slide from 'react-reveal/Slide';
import './nav.css';
import { useState } from 'react';
const Nav = () => {
  const [active, setActive] = useState('home');
  return (
    <nav>
      <a
        className={active === 'home' ? 'active' : ''}
        onClick={() => setActive('home')}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('about')}
        className={active === 'about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive('exp')}
        className={active === 'exp' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive('ser')}
        className={active === 'ser' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('contact')}
        className={active === 'contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
