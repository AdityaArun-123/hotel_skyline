import React, { useEffect, useState } from 'react'
import './spa_and_salon.css';
import { MainHeading } from '../main_heading/MainHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import spa_data from '../../DataBase/spa_data.json';

export const Spa = ({enquireNow}) => {
    const [spaData, setSpaData] = useState([]);
    useEffect(() => {
        getSpaData();
    }, [])
    const getSpaData = () => {
        setSpaData(spa_data);
    }

    const scaleUpPictureSpa = (id) => {
        document.getElementById(id).classList.remove("unScale-spa-image");
        document.getElementById(id).classList.add("scale-spa-image");
    }

    const scaleDownPictureSpa = (id) => {
        document.getElementById(id).classList.remove("scale-spa-image");
        document.getElementById(id).classList.add("unScale-spa-image");
    }

    return (
        <div className="spa-container" data-aos="fade-right">
            <MainHeading heading='spa services' />
            <div className="spa-content">
                <Swiper
                    navigation={{
                        nextEl2: '.spa-right-arrow',
                        prevEl2: '.spa-left-arrow',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.spa-pagination',
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper5"
                >
                    {
                        spaData.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div className="spa-card">
                                    <div className="spa-img">
                                        <img src={item.spa_service_img} alt="" className='spa-image' id={"spa-img-" + index + 1} onMouseOver={() => { scaleUpPictureSpa("spa-img-" + index + 1) }} onMouseOut={() => { scaleDownPictureSpa("spa-img-" + index + 1) }} />
                                    </div>
                                    <div className="spa-card-content">
                                        <div className="spa-card-content-heading">{item.spa_service_name}</div>
                                        <div className="spa-card-content-para">{item.spa_service_desc}</div>
                                        <div className="enq-now-btn common-button" onClick={()=>{enquireNow("Spa", item.spa_service_name)}}>enquire now</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <div className="spa-pagination"></div>
            </div>
        </div>
    )
}
