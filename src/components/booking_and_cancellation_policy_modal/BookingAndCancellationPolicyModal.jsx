import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './booking_and_cancellation_policy_modal.css';

export const BookingAndCancellationPolicyModal = ({onclose}) => {
    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, []);

    const closeRoomMoreDetailsModal = () => {
        document.querySelector(".booking-and-cancellation-modal-container").classList.remove("open");
        document.querySelector(".booking-and-cancellation-modal-content").classList.remove("open");
        document.querySelector(".booking-and-cancellation-modal-container").classList.add("hide");
        document.querySelector(".booking-and-cancellation-modal-content").classList.add("hide");
        setTimeout(()=>{
            onclose();
        }, 300);
    }
    
    return ReactDOM.createPortal(
        <>
            <div className="booking-and-cancellation-modal-container open" onClick={(e) => { if (e.target.className === "booking-and-cancellation-modal-container open") {closeRoomMoreDetailsModal();} }}></div>
            <div className="booking-and-cancellation-modal-content open common-custom-scrollbar">
                <section>
                    <h2>ID Proof Related</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</li>
                    <li><i className="fa-solid fa-circle-check"></i>Local ids are allowed.</li>
                </section>
                <section>
                    <h2>Food Arrangement</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Outside food is not allowed.</li>
                </section>
                <section>
                    <h2>Smoking/Alcohol consumption Rules</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Smoking within the premises is not allowed.</li>
                    <li><i className="fa-solid fa-circle-check"></i>There are no restrictions on alcohol consumption.</li>
                </section>
                <section>
                    <h2>Pet(s) Related</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Pets are not allowed.</li>
                    <li><i className="fa-solid fa-circle-check"></i>There are no pets living on the property.</li>
                </section>
                <section>
                    <h2>Property Accessibility</h2>
                    <li><i className="fa-solid fa-circle-check"></i>This property is not accessible to guests who use a wheelchair. Please make arrangements accordingly.</li>
                </section>
                <section>
                    <h2>Extra Bed Policy</h2>
                    <li><i className="fa-solid fa-circle-check"></i>An extra bed will be provided to accommodate any additional guest included in the booking for a charge mentioned below.
                        INR 2000.00 will be charged for an extra mattress per guest.</li>
                </section>
                <section>
                    <h2>Payment Mode</h2>
                    <li><i className="fa-solid fa-circle-check"></i>You can pay now or you can pay at the hotel if your selected room type has this option.</li>
                </section>
                <section>
                    <h2>Check In/out</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Hotel Check-in Time is 2 PM, Check-out Time is 12 PM.</li>
                </section>
                <section>
                    <h2>Cancellation Policy</h2>
                    <li><i className="fa-solid fa-circle-check"></i>Free Cancellation(100% refund) if you cancel this booking before 48 hours of scheduled arrival date without incurring any penalties.</li>
                    <li>Cancellations post that will be subject to a fee as follows...</li>
                </section>
                <table>
                    <thead>
                        <th>date</th>
                        <th>fee</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Before 48 hours of Booking date</td>
                            <td>0% of booking amount</td>
                        </tr>
                        <tr>
                            <td>After 2 PM of Booking date</td>
                            <td>100% of booking amount</td>
                        </tr>
                    </tbody>
                </table>
                <div className="close-btn" onClick={closeRoomMoreDetailsModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
