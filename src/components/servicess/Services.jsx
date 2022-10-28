import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';
import Slide from 'react-reveal/Slide';
const Services = () => {
  return (
    <section id="services">
      <Slide right>
        <h5>What I Offer</h5>
      </Slide>
      <Slide left>
        <h2>Services</h2>
      </Slide>
      <div className="container services___container">
        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
        </Slide>
        {/* End of UI/UX */}

        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>Web Design</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
        </Slide>
        {/* End Of Web Design */}
        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>Web Development</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
        </Slide>
      </div>
    </section>
  );
};

export default Services;
