import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import galleryData from '../../DataBase/galleryData.json';
import './gallery_light_box.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const GalleryLightBox = ({ id, onclose }) => {
    const [data, setdata] = useState({});
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        setdata(galleryData.at(id));
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [id]);
    return ReactDOM.createPortal(
        <>
            <div className="gallery-light-box-container">
                <div className="light-box-content">
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            data.gallery_card_images && data.gallery_card_images.map((item, index) =>
                                <SwiperSlide>
                                    <img src={item.img_src} alt="" key={index} />
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
                        className="mySwiper21"
                    >
                        {
                            data.gallery_card_images && data.gallery_card_images.map((item, index) =>
                                <SwiperSlide style={{cursor : "pointer"}}>
                                    <img src={item.img_src} alt="" key={index} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                    <div className="light-box-close-btn" onClick={onclose}><i className="fa-regular fa-circle-xmark"></i></div>
                </div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
