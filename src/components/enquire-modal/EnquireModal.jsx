import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './enquire-modal.css';
import { toast } from 'react-toastify';

export const EnquireModal = ({ onclose, serviceCategory, serviceName }) => {
    const [guestEnquiredDetails, setGuestEnquireDetails] = useState({
        massage_category: "",
        massage_name: "",
        guest_name: "",
        guest_phone_num: "",
        enquired_date: "",
    });
    
    useEffect(() => {
        const date = new Date();
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        setGuestEnquireDetails({...guestEnquiredDetails, massage_category : serviceCategory, massage_name : serviceName, enquired_date : date});
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [guestEnquiredDetails, serviceCategory, serviceName]);

    const handelEnquiryInput = (e) => {
        const {name, value} = e.target;
        setGuestEnquireDetails({...guestEnquiredDetails, [name] : value});
    }

    const sendDetails = (e) => {
        e.preventDefault();
        toast.info("Our Representative will contact you shortly...");
        onclose();
    }

    const closeEnquireModal = () => {
        document.querySelector(".enquire-modal-container").classList.remove("open");
        document.querySelector(".enquire-modal-content").classList.remove("open");
        document.querySelector(".enquire-modal-container").classList.add("hide");
        document.querySelector(".enquire-modal-content").classList.add("hide");
        setTimeout(()=>{
            onclose();
        }, 300);
    }

    return ReactDOM.createPortal(
        <>
            <div className="enquire-modal-container open" onClick={(e) => { if (e.target.className === "enquire-modal-container") {closeEnquireModal();} }}></div>
            <div className="enquire-modal-content open">
                <h3>Enquiry Form for {serviceName}</h3>
                <p>Please Fill the details below.</p>
                <form action="#" onSubmit={sendDetails}>
                    <div className="full-name">
                        <input type="text" name="guest_name" placeholder='' className='enquiry-input' required onChange={handelEnquiryInput}/>
                        <label htmlFor="guest_name">Full Name</label>
                    </div>
                    <div className="phone_number">
                        <input type="number" name="guest_phone_num" placeholder='' className='enquiry-input' required onChange={handelEnquiryInput}/>
                        <label htmlFor="guest_phone_num">Phone Number</label>
                    </div>
                    <button type="submit" className='enquiry-submit-btn common-button'>submit</button>
                </form>
                <div className="enquiry-close-btn" onClick={closeEnquireModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
