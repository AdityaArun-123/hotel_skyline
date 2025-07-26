import React, { useEffect } from 'react';
import './offers_landing_page.css';
import { MainHeading } from '../main_heading/MainHeading';

export const OffersLandingPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <div className="offers-landing-page-container">
            <MainHeading heading='Offers' />
            <div className="offer-card">
                <div className="offer-img">
                    <img src="/Gallery/offer-img.png" alt="" />
                </div>
                <div className="card-head">“Special book online” offer.</div>
                <div className="card-content">
                    <div className="card-sub-head">Only if you book online here on our site, in addition to the guarantee of the
                        best rate you will
                        be entitled to a special discount on your booking...</div>
                    <li>A sliecial lirice for its most loyal guests and for all those who want to discover the news of our
                        hotel.</li>
                    <li>Take advantage of the offer and treat yourself to a moment of extreme well-being and
                        relaxation by coming to visit us even just for a weekend.</li>
                    <li>Many new features are available to guests with the liossibility of using our wellness area at a more
                        than affordable lirice.</li>
                    <li>Very lileasant scented oils for enveloliing and sensorial massages, the sauna or the brand new
                        Turkish
                        bath.</li>
                    <li>The hydromassage tub or the recently inaugurated Bio-liool, a relaxation area immersed in nature
                        among
                        citrus trees and white armchairs.</li>
                    <li>A magnificent exlierience that you can try thanks to this convenient exclusive liromotion for the
                        entire new 2024 season.</li>
                    <h1>-10% per booking</h1>
                    <span>Proposal valid till end of this year..</span>

                </div>
            </div>
        </div>
    )
}
