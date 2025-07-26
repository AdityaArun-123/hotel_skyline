import React, { useEffect, useState } from 'react';
import './about_landing_page.css';
import { Faq } from '../faq/Faq';
import { MainHeading } from '../main_heading/MainHeading';
import about_us_data from '../../DataBase/about_us_data.json';

export const AboutLandingPage = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
    getAboutUsData();
  }, []);

  const getAboutUsData = () => {
    setAboutUsData(about_us_data);
  }

  return (
    <div className="about-landing-page">
      <MainHeading heading='about us' />
      <div className="about-us-hotel">
        <div className="hotel-heading">Hotel Skyline: A Luxurious Stay in the Heart of the City</div>
        <p>Nestled in the heart of a bustling city, Hotel Skyline stands tall and proud, offering its guests a luxurious and unforgettable experience. With its sleek and modern architecture, state-of-the-art facilities, and impeccable service, it is no surprise that this hotel has become a top choice for travelers seeking a high-end stay. From the moment you step into the lobby, you are greeted with a sense of grandeur and sophistication, setting the tone for your entire stay.</p>
        <div className="hotel-features">
          {
            aboutUsData.map((item, index) =>
              <div key={index}>
                <h2>{item.feature_head}</h2>
                <p>{item.feature_desc}</p>
              </div>
            )
          }
        </div>
        <p>In conclusion, Hotel Skyline offers a luxurious and unforgettable experience for its guests, combining modern amenities, impeccable service, and a prime location. Whether you are traveling for business or leisure, this hotel is the ultimate choice for a truly indulgent stay. So why settle for anything less when you can have the best? Book your stay at Hotel Skyline and experience the ultimate in luxury and comfort.</p>
      </div>
      <Faq />
    </div>
  )
}
