import React from 'react'
import './offers.css';
import { useNavigate } from 'react-router-dom';

export const Offers = () => {
  const navigate = useNavigate();
  const goToOffersLandingPage = () => {
    navigate('/offers-page');
  }
  const goToRoomsLandingPage = () => {
    navigate('/roons-page');
  }
  return (
    <div className="offers-container">
      <div className="offer-img">
        <img src="/Gallery/offer-img.png" alt="" />
      </div>
      <div className="offer-desc">
        <div className="offer-text">
          By booking on our website or by contacting the Hotel directly, you will
          receive
          <br />
          <span>  a 10% discount </span> on prices. Book your Holiday!
          <span className="offer-read-more" onClick={goToOffersLandingPage}>read more</span>
        </div>
      </div>
      <div className="book-offer-btn common-button-2" onClick={goToRoomsLandingPage}>book now</div>
    </div>

  )
}
