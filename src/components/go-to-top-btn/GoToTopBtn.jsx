import React, { useEffect, useState } from 'react';
import './go-to-top-btn.css';

export const GoToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => { window.removeEventListener('scroll', listenToScroll); }
    }, []);

    const goToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        let heightToHidden = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    return (
        <>
            {
                isVisible && (<div className='go-to-top-button' onClick={goToTop}><i class="fa-solid fa-arrow-up"></i></div>)
            }
        </>
    )
}
