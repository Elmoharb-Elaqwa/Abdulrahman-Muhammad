import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
const Contact = () => {
  const data = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_71cgivw',
      'template_qnjy6c5',
      data.current,
      '7-NbVRdacC445n3OW'
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <Slide right>
        <h5>Get In Touch</h5>
      </Slide>
      <Slide right>
        <h2>Contact Me</h2>
      </Slide>
      <div className="container contact___container">
        <div className="contact___options">
          <Slide bottom>
            <article className="contact___option">
              <MdOutlineEmail className="contact___option-icon" />
              <h5>Email</h5>
              <h2>bm7097002@gmail.com</h2>
              <a href="mailto:bm7097002@gmail.com" target="blank">
                Send a message
              </a>
            </article>
          </Slide>
          <Slide bottom>
            <article className="contact___option">
              <RiMessengerLine className="contact___option-icon" />
              <h5>Messenger</h5>
              <h2>عبدالرحمن محمد شلقامي</h2>
              <a href="https://m.me/a.abdo99" target="blank">
                Send a message
              </a>
            </article>
          </Slide>
          <Slide bottom>
            <article className="contact___option">
              <BsWhatsapp className="contact___option-icon" />
              <h5>Whatsapp</h5>
              <h2>+201115654244</h2>
              <a
                href="https://api.whatsapp.com/send?phone=201115654244"
                target="blank"
              >
                Send a message
              </a>
            </article>
          </Slide>
        </div>
        {/* End of option  */}
        <form action="" ref={data} onSubmit={sendEmail}>
          <Slide bottom>
            <input
              type="text"
              required
              placeholder="Enter Full Name"
              name="name"
            />
          </Slide>
          <Slide bottom>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </Slide>

          <Slide right>
            {' '}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="7"
            ></textarea>
          </Slide>
          <Slide bottom>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </Slide>
        </form>
      </div>
    </section>
  );
};

export default Contact;
