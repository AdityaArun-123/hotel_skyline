import React, { useEffect, useState } from 'react'
import './spa_and_salon.css';
import { MainHeading } from '../main_heading/MainHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import salon_data from '../../DataBase/salon_data.json';

export const Salon = ({enquireNow}) => {
    const [salonData, setSalonData] = useState([]);
    
    useEffect(() => {
        getSalonData();
    }, []);

    const getSalonData = () => {
        setSalonData(salon_data);
    }

    const scaleUpPictureSalon = (id) => {
        document.getElementById(id).classList.remove("unScale-salon-image");
        document.getElementById(id).classList.add("scale-salon-image");
    }

    const scaleDownPictureSalon = (id) => {
        document.getElementById(id).classList.remove("scale-salon-image");
        document.getElementById(id).classList.add("unScale-salon-image");
    }

    return (
        <div className="salon-container" data-aos="fade-left">
            <MainHeading heading='salon services' />
            <div className="salon-content">
                <Swiper
                    navigation={{
                        nextEl1: '.salon-right-arrow',
                        prevEl1: '.salon-left-arrow',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.salon-pagination',
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper6"
                >
                    {
                        salonData.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div className="salon-card">
                                    <div className="salon-img">
                                        <img src={item.salon_service_img} alt="" className='salon-image' id={"salon-img-"+index+1} onMouseOver={()=>{scaleUpPictureSalon("salon-img-"+index+1)}} onMouseOut={()=>{scaleDownPictureSalon("salon-img-"+index+1)}}/>
                                    </div>
                                    <div className="salon-card-content">
                                        <div className="salon-card-content-heading">{item.salon_service_name}</div>
                                        <div className="salon-card-content-para">{item.salon_service_desc}</div>
                                        <div className="enq-now-btn common-button" onClick={()=>{enquireNow("Salon", item.salon_service_name)}}>enquire now</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <div className="salon-pagination"></div>
            </div>
        </div>
    )
}
