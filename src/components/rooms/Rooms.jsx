import React, { useEffect, useRef, useState } from 'react'
import './rooms.css';
import { MainHeading } from '../main_heading/MainHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import rooms from '../../DataBase/rooms.json';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { RoomsLightBox } from '../rooms-light-box/RoomsLightBox';

export const Rooms = () => {

    const [data, setData] = useState([]);
    const [roomLightBox, setRoomLightBox] = useState(false);
    const [roomLightBoxId, setRoomLightBoxId] = useState(0);

    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    useEffect(() => {
        getRoomData();
        Aos.init({ duration: 1000, offset: 250, delay: 300 });
    }, [])

    const getRoomData = () => {
        setData(rooms);
    }

    return (
        <>
        {
            roomLightBox && <RoomsLightBox id={roomLightBoxId} onclose={()=>{setRoomLightBox(false)}}/>
        }
            <div className="rooms-homepage-container">
                <MainHeading heading='rooms and suites' />
                <div className="rooms-card-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={{
                            nextEl: swiperNavNextRef.current,
                            prevEl: swiperNavPrevRef.current,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.c',
                            type: 'bullets',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1600: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                            swiper.params.navigation.nextEl = swiperNavNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {
                            data.map((item, index) =>
                                <SwiperSlide>
                                    <div className="room-cards" key={index} data-aos="zoom-in-up">
                                        <div className="room-card-img">
                                            <img src={item.room_images[0].src} alt="" />
                                            <div className="no-of-photos" onClick={()=>{setRoomLightBox(true); setRoomLightBoxId(index)}}>
                                                {item.room_images.length} photos
                                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="room-card-desc">
                                            <p>{item.room_name}</p>
                                            <div className="amenities">
                                                {
                                                    item.room_featues && item.room_featues.map((value, idk) =>
                                                        <li key={idk}>{value.feature_name}</li>
                                                    )
                                                }
                                            </div>
                                            <div className="room-card-price">
                                                Starting From :- <span>Rs. {item.room_starting_price}/- </span>Per Night
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <div className="a" ref={swiperNavPrevRef}><i className="fa-solid fa-circle-chevron-left"></i></div>
                    <div className="b" ref={swiperNavNextRef}><i className="fa-solid fa-circle-chevron-right"></i></div>
                    <div className="c"></div>
                    <Link to={'/roons-page'} className='view-in-detail-btn common-button'>view in details</Link>
                </div>
            </div>
        </>
    )
}
