import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import rooms from '../../DataBase/rooms.json';
import '../gallery-light-box/gallery_light_box.css';

export const RoomsLightBox = ({ id, onclose }) => {
    const [roomImageData, setRoomImageData] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        setRoomImageData(rooms.at(id).room_images);
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [id]);

    return ReactDOM.createPortal(
        <>
            <div className="rooms-light-box-container">
                <div className="rooms-light-box-content">
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper55"
                    >
                        {
                            roomImageData && roomImageData.map((item, index) =>
                                <SwiperSlide>
                                    <img src={item.src} alt="" key={index} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={2}
                        freeMode={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                            },
                            440: {
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 4,
                            }
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper56"
                    >
                        {
                            roomImageData && roomImageData.map((item, index) =>
                                <SwiperSlide style={{cursor : "pointer"}}>
                                    <img src={item.src} alt="" key={index} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <div className="rooms-light-box-close-btn" onClick={onclose}><i className="fa-regular fa-circle-xmark"></i></div>
                </div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
