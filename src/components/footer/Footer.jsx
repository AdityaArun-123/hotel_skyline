import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="about-hotel">
          <h5>Hotel <span>SkyLine</span></h5>
          <p>
            Hotel Skyline offers a luxurious retreat with stunning city views, modern amenities, and exceptional service. Experience comfort and elegance as you unwind in this premier destination for travelers and locals alike.
          </p>
        </div>
        <div className="quick-links">
          <h5>quick links</h5>
          <ul style={{ width: "100%" }}>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/about-page'}>About Us</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/roons-page'}>Rooms</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/why-choose-us-page'}>Why Choose Us</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/gallery-page'}>Gallery</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/spa-and-salon-page'}>Spa & Salon</Link>
            </li>
          </ul>
        </div>
        <div className="customer-help">
          <h5>customer help</h5>
          <ul style={{ width: "100%" }}>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/contact-us'}>Contact Us</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/reviews-page'}>Guest Feedback</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/offers-page'}>Offers</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/contact-us'}>Location</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/privacy-policy-page'}>Hotel Policy</Link>
            </li>
            <li>
              <i className="fa-solid fa-right-long footer-right-arrow"></i>
              <Link to={'/terms-and-condition-page'}>Terms & Condition</Link>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h5>contact us</h5>
          <li>
            <i className="fa-solid fa-phone footer-right-arrow"></i>
            +91-456&nbsp;2123&nbsp;452
          </li>
          <li>
            <i className="fa-solid fa-phone footer-right-arrow"></i>
            +91-456&nbsp;2123&nbsp;589
          </li>
          <li>
            <i className="fa-solid fa-envelope footer-right-arrow"></i>
            info@hotelskyline.com
          </li>
          <li>
            <i className="fa-solid fa-location-dot footer-right-arrow"></i>
            Kamla Nagar, Near Hill Groove School, Bhattakufer, Frood, Sanjauli,
            Shimla, HP, 171006, India
          </li>
        </div>
      </div>
      <div className="social-links">
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-youtube"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
      </div>
      <hr style={{ width: "80%", margin: "2% auto" }} />
      <div className="copyright">
        <p>&copy; Copyright &#64; 2024 By <span>ADITYA</span></p>
      </div>
    </div>
  )
}
