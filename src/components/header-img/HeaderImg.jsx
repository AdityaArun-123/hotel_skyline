import React, { useEffect, useState } from 'react'
import './header_img.css';
import headerImg from '../../DataBase/headerImg.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export const HeaderImg = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(headerImg);
    }, []);
  
    return (
      <>
        <div className="header-img-container">
          <div className="background-img">
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{
                delay: 3000,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper1">
              {
                data.map((item, index) =>
                  <SwiperSlide key={index}>
                    <img src={item.src} alt={item.alt} />
                    <div className="background-img-title">{item.desc}</div>
                  </SwiperSlide>
  
                )
              }
            </Swiper>
            <div className="swiper-button-prev y"></div>
            <div className="swiper-button-next x"></div>
            <div className="swiper-pagination z"></div>
          </div>
        </div >
      </>
    )
}
