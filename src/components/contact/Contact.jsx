import React, { useEffect, useState } from 'react';
import './contact.css';
import { MainHeading } from '../main_heading/MainHeading';
import { toast } from 'react-toastify';

export const Contact = () => {
  const[userDetails, setUserDetails] = useState({
    name : "",
    email : "",
    subject : "",
    message : "",
  });

  useEffect(() => {
    window.scrollTo({top : 0, left : 0});
  }, []);

  const handleContactInput = (e) => {
    const{name, value} = e.target;
    setUserDetails({...userDetails, [name] : value});
  }

  const sendContactDetails = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully. We will contact you within 48 hours...", {autoClose: 4000});
  }

  return (
    <>
      <div className="contact-us-container">
        <MainHeading heading='contact us' />
        <div className="contact-us-content">
          <div className="contact-us-contact-info">
            <span>reception office</span>
            <p>
              Kamla Nagar, Near Hill Groove School, Bhattakufer, Frood, Sanjauli,
              Shimla, Himachal Pradesh, 171006, India
            </p>
            <span>reception hours</span>
            <p>7:30 AM - 11:00PM</p>
            <span>contact</span>
            <p>+91-456&nbsp;2123&nbsp;452</p>
            <p>+91-456&nbsp;2123&nbsp;589</p>
            <p>info@hotelskyline.com</p>
            <span>follow us</span>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://x.com/?lang=en">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@A_1_coaching">
              <i className="fa-brands fa-square-youtube"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
          <div className="contact-us-user-info">
            <form action="#" method='post' onSubmit={sendContactDetails}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleContactInput} required/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleContactInput} required/>
              <label htmlFor="Subject">Subject</label>
              <input type="text" name="subject" onChange={handleContactInput} required/>
              <label htmlFor="message">Message</label>
              <textarea name="message" onChange={handleContactInput} required/>
              <button type="submit" className='send-msg-btn common-button'>Send a Message</button>
            </form>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.411010883392!2d77.19990571134656!3d31.098306567766176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905833edf300567%3A0x5ba890ae809edf80!2sThe%20Orchid%20Hotel%20Shimla!5e0!3m2!1sen!2sin!4v1705348428832!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            title='Hotel Location'
          />
        </div>
      </div>
    </>
  )
}
