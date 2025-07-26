import React, { useEffect } from 'react'
import './why_choose_us.css';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { MainHeading } from '../main_heading/MainHeading';

export const WhyChooseUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 100, offset: 200 });
    }, []);
    const navigate = useNavigate();
    return (
        <div className="why-choose-us-container">
            <MainHeading heading='why choose us' />
            <div className="sub-heading">
                we belive that a trip should be more than just a place to sleep. it should
                be a journey that enriches your soul, and that's why we go the extra mile to
                curate unique experiences.
            </div>
            <div className="why-choose-us-content" data-aos="fade-up-right">
                <div className="left-content">
                    <div className="upper-box">
                        <img src="/Gallery/Why Choose Us Images/facilities-mountain-view.jpg" alt="" />
                    </div>
                    <div className="lower-box" />
                </div>
                <div className="right-content">
                    <div className="lines">
                        <div className="numbering">
                            <img src="/Gallery/Why Choose Us Images/why-choose-us-numbering-img 2-modified-modified.png" alt="" />
                        </div>
                        <span>Unforgettable Experiences</span>
                    </div>
                    <div className="lines">
                        <div className="numbering">
                            <img src="/Gallery/Why Choose Us Images/why-choose-us-numbering-img 2-modified-modified.png" alt="" />
                        </div>
                        <span>Unforgatable Memories</span>
                    </div>
                    <div className="lines">
                        <div className="numbering">
                            <img src="/Gallery/Why Choose Us Images/why-choose-us-numbering-img 2-modified-modified.png" alt="" />
                        </div>
                        <span>Unparalleled Comfort</span>
                    </div>
                    <div className="read-more common-button" onClick={() => { navigate('/why-choose-us-page') }}>Read More</div>
                </div>
            </div>
        </div>
    )
}
