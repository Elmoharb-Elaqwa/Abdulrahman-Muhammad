import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <section id="experience">
      <Fade left>
        <h5>The Skills I Have</h5>
      </Fade>
      <Fade left>
        <h2>My Experiences</h2>
      </Fade>
      <div className="container experience___container">
        <Fade top>
          <div className="experience___frontend">
            <h3>Frontend Develpment</h3>
            <div className="experience___content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>REACT</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>REDUX</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>REDUX TOOLKIT</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>

        {/* End of frontend development */}

        <Fade top>
          <div className="experience___backend">
            <h3>Backend Development </h3>
            <div className="experience___content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>NODE JS</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>EXPRESS JS</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>MONGO DB</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
