import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './final_price_details_modal.css';
import { useParams } from 'react-router-dom';
import rooms from '../../DataBase/rooms.json';

export const FinalPriceDetailsModal = ({ onclose, noOfDays, noOfRooms }) => {
    const roomId = useParams();
    const priceId = useParams();
    
    const getData = useCallback(()=>{
        
        let data = [];
        data = rooms.at(roomId.roomId - 1).room_price_card.at(priceId.priceId);
        
        let convertedPerRoomPrice = data.new_price.replace(/,/g, "");
        let basePrice;
        basePrice = (parseInt(convertedPerRoomPrice) * noOfDays) * noOfRooms;
        document.getElementById("base-price").innerText = basePrice;

        document.getElementById("total-discount").innerText = (basePrice * 10) / 100;
        document.getElementById("discount").innerText = (basePrice * 10) / 100;
        let priceAfterDiscount = basePrice - (basePrice * 10) / 100;
        document.getElementById("price-after-discount").innerText = priceAfterDiscount;

        let convertedTaxPrice = data.tax_price.replace(/,/g, "");
        let totalTaxAndFees = parseInt(convertedTaxPrice) + (basePrice * 18) / 100;
        document.getElementById("total-tax-and-fees").innerText = totalTaxAndFees;
        document.getElementById("hotel-GST").innerText = (basePrice * 18) / 100;
        document.getElementById("service-fees").innerText = parseInt(convertedTaxPrice);

        document.getElementById("total-amount").innerText = priceAfterDiscount + totalTaxAndFees;

    }, [roomId, priceId, noOfDays, noOfRooms]);

    useEffect(() => {
        getData();
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [getData]);

    const closeFinalPriceDetailsModal = () => {
        document.querySelector(".price-details-modal-container").classList.remove("open");
        document.querySelector(".price-details-modal-content").classList.remove("open");
        document.querySelector(".price-details-modal-container").classList.add("hide");
        document.querySelector(".price-details-modal-content").classList.add("hide");
        setTimeout(()=>{
            onclose();
        }, 300);
    }

    return ReactDOM.createPortal(
        <>
            <div className="price-details-modal-container open" onClick={(e) => { if (e.target.className === "price-details-modal-container open") {closeFinalPriceDetailsModal();} }}></div>
            <div className="price-details-modal-content open">
                <div className="price-heading">
                    <h1>price summary</h1>
                </div>
                <table>
                    <tbody>
                        <tr className='price-details-head'>
                            <td>base price ({noOfRooms} Room x {noOfDays} night)</td>
                            <td>&#8377; <span id='base-price'></span></td>
                        </tr>
                        <tr className='price-details-head'>
                            <td>total discount</td>
                            <td style={{ color: "#218e06" }}>-&#8377; <span id='total-discount'></span></td>
                        </tr>
                        <tr>
                            <td>hotelOffWeb101</td>
                            <td>&#8377; <span id='discount'></span></td>
                        </tr>
                        <tr className='price-details-head'>
                            <td>price after discount</td>
                            <td>&#8377; <span id='price-after-discount'></span></td>
                        </tr>
                        <tr className='price-details-head'>
                            <td>taxes & services fees</td>
                            <td>&#8377; <span id='total-tax-and-fees'></span></td>
                        </tr>
                        <tr>
                            <td>hotel GST</td>
                            <td>&#8377; <span id='hotel-GST'></span></td>
                        </tr>
                        <tr>
                            <td>service fees</td>
                            <td>&#8377; <span id='service-fees'></span></td>
                        </tr>
                        <tr>
                            <td>total amount to be paid</td>
                            <td>&#8377; <span id='total-amount'></span></td>
                        </tr>
                    </tbody>
                </table>
                <div className='pay-now-btn common-button'>pay now<span><i className="fa-solid fa-location-arrow"></i></span></div>
                <div className="close-btn" onClick={closeFinalPriceDetailsModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
