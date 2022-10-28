import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/p1.jpg';
import AVTR2 from '../../assets/p2.jpg';
import AVTR3 from '../../assets/p3.jpg';
import AVTR4 from '../../assets/p4.jpg';
import Slide from 'react-reveal/Slide';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Abdulrahman Muhammad',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sint! Commodi eius voluptatem obcaecati sed, earum, recusandaequibusdam iusto aperiam autem provident nobis et, quo quae ea. Praesentium, dicta sapiente!',
    },
    {
      avatar: AVTR2,
      name: 'Abdulrahman Muhammad',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sint! Commodi eius voluptatem obcaecati sed, earum, recusandaequibusdam iusto aperiam autem provident nobis et, quo quae ea. Praesentium, dicta sapiente!',
    },
    {
      avatar: AVTR3,
      name: 'Abdulrahman Muhammad',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sint! Commodi eius voluptatem obcaecati sed, earum, recusandaequibusdam iusto aperiam autem provident nobis et, quo quae ea. Praesentium, dicta sapiente!',
    },
    {
      avatar: AVTR4,
      name: 'Abdulrahman Muhammad',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sint! Commodi eius voluptatem obcaecati sed, earum, recusandaequibusdam iusto aperiam autem provident nobis et, quo quae ea. Praesentium, dicta sapiente!',
    },
  ];
  return (
    <section id="testimonials">
      <Slide left>
        <h5>Review from clients</h5>
      </Slide>
      <Slide left>
        <h2>Testimonials</h2>
      </Slide>
      <Slide right>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="container testimonials___container"
        >
          {data.map((data, index) => {
            return (
              <SwiperSlide className="testimonials" key={index}>
                <div className="client___avatar">
                  <img src={data.avatar} alt="" />
                </div>
                <h5 className="client___name">{data.name}</h5>
                <small className="client___review">{data.review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Testimonials;
