import React, { useEffect, useState } from 'react';
import './faq.css';
import { MainHeading } from '../main_heading/MainHeading';
import faq_data from '../../DataBase/faq_data.json';

export const Faq = () => {

    const [faqData, setFaqData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getFaqData();
    }, [])

    const getFaqData = () => {
        setFaqData(faq_data);
    }

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <>
            <div className="faq-container">
                <MainHeading heading='frequently asked questions' />
                <div className="faq-sub-heading">Here's a list of the most common guests questions. If you can't find an answer to your question, please
                    don't hesitate to <span>Contact Us</span>
                </div>
                <div className="faq-content">
                    <div className="content-1">
                        <img src="/Gallery/faq 2.jpg" alt="" />
                    </div>
                    <div className="content-2">
                        {
                            faqData.map((item, index) =>
                                <div className="faq-accordian" onClick={() => { toggle(index) }} key={index}>
                                    <div className="question">
                                        {item.question}
                                        <i className={selected === index ? "fa-solid fa-angle-down rotate" : "fa-solid fa-angle-down"}></i>
                                    </div>
                                    <div className={selected === index ? "answer show" : "answer"}>
                                        {item.answer}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
