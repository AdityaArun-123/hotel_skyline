import React, { useEffect} from 'react'
import './reviews.css';
import { MainHeading } from '../main_heading/MainHeading';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Stars } from './Stars';
import reviewData from '../../DataBase/reviewData.json';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

export const Reviews = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200, delay: 200 });
  }, []);
  return (
    <div className="reviews-container">
      <MainHeading heading='what our happy guest say about us' />
      <div className="review-content" data-aos="fade-up">
        <div className="background-box" />
        <div className="reviews-box">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              nextEl: '.review-button-next',
              prevEl: '.review-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.reviews-pagination',
              type: 'bullets',
            }}
            breakpoints={{
              650: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 15,
              }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper9"
          >
            {
              reviewData.map((item, index) =>
                <SwiperSlide>
                  <div className="review-card" key={index}>
                    <div className="ratings">
                      <Stars stars={item.user_star_rating} />
                    </div>
                    <div className="message">{item.user_review_msg}</div>
                    <div className="user-info">
                      <div className="user-photo">
                        <img src={item.user_pic} alt="" />
                      </div>
                      <div className="user-name-and-date-time">
                        <div className="user-name">{item.user_name}</div>
                        <div className="review-date-time">{item.review_date}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
          </Swiper>
          <div className="review-button-prev"><i className="fa-solid fa-circle-chevron-left"></i></div>
          <div className="review-button-next"><i className="fa-solid fa-circle-chevron-right"></i></div>
          <div className="reviews-pagination"></div>
        </div>
      </div>
      <div className="view-all-review common-button" onClick={() => { navigate('/reviews-page') }}>view all reviews</div>
    </div>
  )
}

