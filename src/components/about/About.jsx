import React, { useEffect } from 'react'
import './about.css';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { MainHeading } from '../main_heading/MainHeading';

export const About = () => {
  useEffect(()=>{
    Aos.init({duration : 1000, delay : 200, offset : 300});
  }, []);
  const navigate = useNavigate();
  return (
    <div className="about-us-container">
    <MainHeading heading = 'about us' />
      <div className="about-us-content">
        <div className="para" data-aos="fade-right">
          <span>Hotel Skyline: A Luxurious Stay in the Heart of the City</span>
          Nestled in the heart of a bustling city, Hotel Skyline stands tall and
          proud, offering its guests a luxurious and unforgettable experience. With
          its sleek and modern architecture, state-of-the-art facilities, and
          impeccable service, it is no surprise that this hotel has become a top
          choice for travelers seeking a high-end stay.
          <div className="read-more common-button" onClick={()=>{navigate('/about-page')}}>read more</div>
        </div>
        <div className="about-us-img" data-aos="fade-left">
          <img src="/Gallery/about-us-img.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  )
}
