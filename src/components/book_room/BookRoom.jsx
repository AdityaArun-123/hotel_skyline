import React, { useEffect, useState } from 'react';
import './book_room.css';
import { useNavigate } from 'react-router-dom';
import { EmptyBookRoomPage } from '../empty_book_room_page/EmptyBookRoomPage';
import { MainHeading } from '../main_heading/MainHeading';
import rooms from '../../DataBase/rooms.json';
import Swal from 'sweetalert2';
import { BookingAndCancellationPolicyModal } from '../booking_and_cancellation_policy_modal/BookingAndCancellationPolicyModal';
import { BookRoomForm } from '../book_room_form/BookRoomForm';

export const BookRoom = () => {
    const roomId = localStorage.getItem("bookedRoomId");
    const [priceId, setPriceId] = useState(localStorage.getItem("bookedRoomPriceId"))
    const navigate = useNavigate();
    const [bookRoomData, setBookRoomData] = useState({});
    const [bookRoomPriceData, setBookRoomPriceData] = useState({});
    const [cancellationPolicyModal, setCancellationPolicyModal] = useState(false);
    useEffect(() => {
        window.scrollTo({ left: 0, top: 0 });
        const getBookRoomData = () => {
            setBookRoomData(rooms.at(roomId - 1));
            setBookRoomPriceData(rooms.at(roomId - 1).room_price_card.at(priceId));
        }
        getBookRoomData();
    }, [priceId, roomId]);

    const changePackage = () => {
        navigate('/roons-page');
    }

    const removePackage = () => {
        Swal.fire({
            title: "Are you sure! You want to delete this Room ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "The Room has been deleted.",
                    icon: "success"
                });
                localStorage.setItem("bookedRoomPriceId", "");
                setPriceId("");
            }
        });
    }

    return (
        <>
            {
                cancellationPolicyModal && <BookingAndCancellationPolicyModal onclose={() => { setCancellationPolicyModal(false) }} />
            }

            {
                priceId !== "" ?
                    <div className="book-room-container">
                        <MainHeading heading='booked room' />
                        <div className="book-room-content">
                            <div className="booked-room-img">
                                <img src={bookRoomData.room_images && bookRoomData.room_images.at(0).src} alt="" />
                                <p onClick={() => { setCancellationPolicyModal(true) }}>view booking & cancellation policy</p>
                            </div>
                            <div className="booked-room-details">
                                <div className="room-name">{bookRoomData.room_name}</div>
                                <div className="room-plan-and-price">
                                    <div className="room-plan">{bookRoomPriceData.price_card_name}</div>
                                    <div className="room-price">₹ {bookRoomPriceData.new_price} Per Night <span>+₹ {bookRoomPriceData.tax_price} taxes & fees</span></div>
                                </div>
                                <div className="booked-room-plan-info">
                                    {
                                        bookRoomPriceData.details && bookRoomPriceData.details.map((item, index) =>
                                            <li key={index}><i className="fa-solid fa-circle-check"></i>{item}</li>
                                        )
                                    }
                                </div>
                                <div className="booked-room-warning-msg">
                                    <p><i className="fa-solid fa-triangle-exclamation"></i>maximum 2 adults and 1 children is allowed.</p>
                                </div>
                                <div className="booked-room-btns">
                                    <div className="booked-room-change-package common-button" onClick={changePackage}>change package</div>
                                    <div className="booked-room-remove-pacakge common-button" onClick={removePackage}>delete package</div>
                                </div>
                            </div>
                        </div>
                        <BookRoomForm />
                    </div>
                    : <EmptyBookRoomPage />
            }
        </>
    )
}
