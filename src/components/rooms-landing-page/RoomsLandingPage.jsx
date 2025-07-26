import React, { useEffect, useState } from 'react';
import './rooms_landing_page.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import rooms from '../../DataBase/rooms.json';
import { useNavigate } from 'react-router-dom';
import { MainHeading } from '../main_heading/MainHeading';
import { RoomsMoreDetails } from '../rooms-more-details/RoomsMoreDetails';

export const RoomsLandingPage = () => {
    const [rooms_info, setRooms_info] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalId, setModalId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getRoomsData();
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    const getRoomsData = () => {
        setRooms_info(rooms);
    }

    const scalePriceCard = (id) => {
        document.getElementById(id).classList.remove("unScale");
        document.getElementById(id).classList.add("scale");
    }

    const unScalePriceCard = (id) => {
        document.getElementById(id).classList.remove("scale");
        document.getElementById(id).classList.add("unScale");
    }

    const sendRoomData = (roomId, priceId) => {
        localStorage.setItem("bookedRoomId", roomId);
        localStorage.setItem("bookedRoomPriceId", priceId);
        navigate('/book-room-page');
    }

    return (
        <>
            {
                modalOpen && <RoomsMoreDetails id={modalId - 1} onclose={() => { setModalOpen(false) }} />
            }
            <div className="rooms-landing-page-container">
                <MainHeading heading='rooms and suites' />
                {
                    rooms_info.map((item) =>
                        <div className="room-types-container" key={item.id}>
                            <div className="rooms-details">
                                <div className="room-landing-page-img">
                                    <Swiper
                                        key={item.id}
                                        cssMode={true}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        pagination={{
                                            dynamicBullets: true,
                                            el: '.swiper-pagination',
                                        }}
                                        modules={[Navigation, Pagination]}
                                        className="mySwiper3">
                                        {
                                            item.room_images.map((img, idk) =>
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

                                <div className="room-name">{item.room_name}</div>
                                <div className="room-features">
                                    {
                                        item.room_featues.map((data) =>

                                            <div className="room-features-list">
                                                <div className="room-features-img">
                                                    <img src={data.featues_img} alt="" />
                                                </div>
                                                <span>{data.feature_name}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="room-amenities">
                                    <span>Amenities</span>
                                    <ul>
                                        {
                                            item.basic_room_amenities.map((value) =>
                                                <li>{value}</li>
                                            )
                                        }
                                    </ul>
                                </div>

                                <button type='button' className="more-details" onClick={() => { setModalOpen(true); setModalId(item.id) }}>
                                    More Details
                                </button>
                            </div>

                            <div className="rooms-pricing-details">
                                {
                                    item.room_price_card.map((data, idk) =>
                                        <div className="price-card" key={idk} id={"price-card-" + idk + "-of-" + item.id} onMouseOver={() => { scalePriceCard("price-card-" + idk + "-of-" + item.id) }} onMouseOut={() => { unScalePriceCard("price-card-" + idk + "-of-" + item.id) }}>
                                            <h3>{data.price_card_name}</h3>
                                            <div className="room-price">
                                                <div className="old-price">&#8377; {data.old_price}</div>
                                                <div className="new-price">
                                                    <div className="price">&#8377; {data.new_price} Per Night</div>
                                                    <div className="tax-price">+&#8377; {data.tax_price} & fees</div>
                                                </div>
                                            </div>

                                            <div className="price-card-content">
                                                <ul>
                                                    {
                                                        data.details.map((value) =>
                                                            <li><i className="fa-solid fa-circle-check"></i>{value}</li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                            <div onClick={() => { sendRoomData(item.id, idk) }} className="book-room common-button">book room</div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div >
        </>
    )
}
