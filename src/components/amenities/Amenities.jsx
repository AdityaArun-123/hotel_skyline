import React, { useEffect } from 'react'
import './amenities.css';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { MainHeading } from '../main_heading/MainHeading';

export const Amenities = () => {
  useEffect(()=>{
    Aos.init({duration : 1000});
  }, []);
  return (
    <div className="amenities-container">
    <MainHeading heading = 'what we offer' />
      <div className="amenities-content">
        <div className="amenities-card" data-aos="zoom-out" data-aos-delay="100">
          <div className="card-img">
            <img src="/Gallery/What we Offer/Amenities-An Infinite-edge Pool.jpeg" alt="" />
          </div>
          <div className="card-title">An Infinite-Edge Pool</div>
          <div className="card-desc">
            Experience the joy of swimming in our infinity-edge pool that gives you
            a nice picturesque view.
          </div>
        </div>
        <div className="amenities-card" data-aos="zoom-out" data-aos-delay="300">
          <div className="card-img">
            <img src="/Gallery/What we Offer/Amenities-spa.jpeg.jpg" alt="" />
          </div>
          <div className="card-title">An Iconic SPA</div>
          <div className="card-desc">
            Set forth on an exquisite wellness journey to refresh, re-energize and
            rejuvenate at our iconic spa.
          </div>
        </div>
        <div className="amenities-card" data-aos="zoom-out" data-aos-delay="500">
          <div className="card-img">
            <img src="/Gallery/What we Offer/Amenities-Guest Computer & WiFi.jpeg.jpg" alt="" />
          </div>
          <div className="card-title">Guest Computer &amp; WiFi</div>
          <div className="card-desc">
            We offer special computers and WiFi for guests who'd like to stay
            connected while on vacation.
          </div>
        </div>
        <div className="amenities-card" data-aos="zoom-out" data-aos-delay="600">
          <div className="card-img">
            <img src="/Gallery/What we Offer/Amenities-24 Hour Concierge.jpg" alt="" />
          </div>
          <div className="card-title">24 Hour Concierge</div>
          <div className="card-desc">
            We have three in-house restaurants offering different cuisines that you
            can choose from.
          </div>
        </div>
      </div>
    </div>

  )
}
