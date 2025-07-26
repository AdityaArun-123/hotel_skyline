import React, { useEffect, useState } from 'react';
import './rooms_more_details.css';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import rooms from '../../DataBase/rooms.json';

export const RoomsMoreDetails = ({ id, onclose }) => {
    const [room_data, setRoom_data] = useState({});

    useEffect(() => {
        const getData = () => {
            setRoom_data(rooms.at(id));
        }
        getData();
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [id]);

    const closeRoomMoreDetailsModal = () => {
        document.querySelector(".rooms-more-details-container").classList.remove("open");
        document.querySelector(".more-details-content").classList.remove("open");
        document.querySelector(".rooms-more-details-container").classList.add("hide");
        document.querySelector(".more-details-content").classList.add("hide");
        setTimeout(() => {
            onclose();
        }, 300);
    }

    return ReactDOM.createPortal(
        <>
            <div className="rooms-more-details-container open" onClick={(e) => { if (e.target.className === "rooms-more-details-container open") { closeRoomMoreDetailsModal(); } }}></div>
            <div className="more-details-content open common-custom-scrollbar">
                <div className="rooms-more-details-heading">{room_data.room_name}</div>
                <div className="room-img">
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper4">
                        {
                            room_data.room_images && room_data.room_images.map((img, idk) =>
                                <SwiperSlide>
                                    <img src={img.src} alt="" key={idk} />
                                </SwiperSlide>
                            )
                        }
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
                <div className="room-details">
                    <p>{room_data.room_des}</p>
                </div>
                <div className="room-more-details-features">
                    {
                        room_data.room_featues && room_data.room_featues.map((data, index) =>
                            <li key={index}>
                                <img src={data.featues_img} alt="" />
                                <span>{data.feature_name}</span>
                            </li>
                        )
                    }
                </div>

                <div className="rooms-more-details-amenities">
                    <h2>room amenities</h2>
                    {
                        room_data.rooms_amenities && room_data.rooms_amenities.map((item, pos) =>
                            <>
                                <p>{item.amenities_category}</p>
                                <ul>
                                    {
                                        item.amenities.map((value, index) =>
                                            <li key={index}><i className="fa-solid fa-circle-check"></i>{value}</li>
                                        )
                                    }
                                </ul>
                            </>
                        )
                    }
                </div>
                <div className="close-btn" onClick={closeRoomMoreDetailsModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div >
        </>,
        document.getElementById("modalDiv")
    )
}
