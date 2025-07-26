import React, { useEffect, useState } from 'react';
import './why_choose_us_landing_page.css';
import why_choose_us_data from '../../DataBase/why_choose_us_data.json';
import { MainHeading } from '../main_heading/MainHeading';

export const WhyChooseUsLandingPage = () => {
    const [whyChooseUsData, setWhyChooseUsData] = useState([]);
    useEffect(() => {
        window.scrollTo({ left: 0, top: 0 });
        getWhyChooseUsData();
    }, []);

    const getWhyChooseUsData = () => {
        setWhyChooseUsData(why_choose_us_data);
    }

    return (
        <div className="why-choose-us-landing-page-container">
            <MainHeading heading='why choose us' />
            <span className='why-choose-us-landing-page-span'>here are 5 excellent reasons...</span>
            <div className="why-choose-us-landing-page-sub-heading">Why choose us? We did some research among our guests' feedback to find out what things they appreciated most during their holiday here with us. Here, thanks to their reviews, are 5 excellent
                reasons, which give a clear answer to why you should choose us to spend a holiday in our 4-star Hotel Skyline.
                in Shimla</div>
            <div className="why-choose-us-landing-page-content">
                {
                    whyChooseUsData.map((item, index) =>
                        <div className="reasons" key={index}>
                            <div className="reasons-head">
                                <div className="num-img">
                                    <img src={item.image} alt='numbering'/>
                                </div>
                                <i>{item.head}</i>
                            </div>
                            <div className="reasons-sub-head">{item.sub_head}</div>
                            <div className="reasons-body">{item.desc}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
