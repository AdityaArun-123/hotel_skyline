import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './calender.css';

export const Calender = ({onclose, selectedCheckInOutDate, categ}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const [numberOfDays, setNumberOfDays] = useState(new Date(currentYear, currentMonth, 0).getDate());

    let firstDateDay = new Date(currentYear, currentMonth - 1, 1).getDay() - 1;
    if (firstDateDay === -1) {
        firstDateDay = 6;
    }

    useEffect(() => {
        setNumberOfDays(new Date(currentYear, currentMonth, 0).getDate());
    }, [currentMonth, currentYear]);

    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, [])

    const prevMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12);
            setCurrentYear(currentYear - 1);
        }
        else {
            setCurrentMonth(currentMonth - 1);
        }
    }

    const nextMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1);
            setCurrentYear(currentYear + 1);
        }
        else {
            setCurrentMonth(currentMonth + 1);
        }
    }

    const getSelectedDate = (date) => {
        selectedCheckInOutDate(date + "/" + months.at(currentMonth - 1) + "/" + currentYear, categ);
        onclose();
    }

    const closeCheckInModal = () => {
        document.querySelector(".calender-modal-container").classList.remove("open");
        document.querySelector(".calender-modal-content").classList.remove("open");
        document.querySelector(".calender-modal-container").classList.add("hide");
        document.querySelector(".calender-modal-content").classList.add("hide");
        setTimeout(() => {
            onclose();
        }, 300);
    }

    return ReactDOM.createPortal(
        <>
            <div className="calender-modal-container open" onClick={(e) => { if (e.target.className === "calender-modal-container open") { closeCheckInModal(); } }}></div>
            <div className="calender-modal-content open">
                <div className="header-and-navigating-icons">
                    {
                        currentMonth - 1 === date.getMonth() && currentYear === date.getFullYear() ?
                            <div className='prev-btn deactive'><i className="fa-solid fa-circle-chevron-left"></i></div> : <div onClick={prevMonth} className='prev-btn'><i className="fa-solid fa-circle-chevron-left"></i></div>
                    }
                    <p className="current-date">{months.at(currentMonth - 1)}&nbsp;{currentYear}</p>
                    <div className='next-btn' onClick={nextMonth}><i className="fa-solid fa-circle-chevron-right"></i></div>
                </div>
                <div className="calendar">
                    <ul className="weeks">
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>
                    <ul className="days">
                        {
                            new Array(firstDateDay).fill(0).map((_, index) =>
                                <li key={index} style={{ visibility: "hidden" }}></li>
                            )
                        }
                        {
                            new Array(numberOfDays).fill(0).map((_, index) =>
                                (index + 1 < date.getDate() &&
                                    currentMonth - 1 === date.getMonth()) &&
                                    currentYear === date.getFullYear() ?
                                    <li key={index} className='dates inactive'>{index + 1}</li> :
                                    <li key={index} onClick={() => { getSelectedDate(index + 1) }} className='dates'>{index + 1}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="calender-close-btn" onClick={closeCheckInModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}

