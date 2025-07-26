import React, { useState } from 'react';
import './header.css';
import './hamburger-menu.css';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [subMenu1, setSubMenu1] = useState(false);
    const [subMenu2, setSubMenu2] = useState(false);
    const navigate = useNavigate();

    let media = matchMedia("(max-width : 1100px)");
    const hideNavBar = () => {
        if (media.matches) {
            setNavbar(!navbar);
            setMenuIcon(!menuIcon);
        }
        else {
            setSubMenu1(false);
            setSubMenu2(false);
        }
    }

    const showAndHideHeader1DropDownOnClick = () => {
        if (media.matches) {
            setSubMenu1(!subMenu1);
            setSubMenu2(false);
        }
    }

    const showAndHideHeader2DropDownOnClick = () => {
        if (media.matches) {
            setSubMenu2(!subMenu2);
            setSubMenu1(false);
        }
    }

    const showResponsiveNavBar = () => {
        setNavbar(!navbar);
        setMenuIcon(!menuIcon);
    }

    return (
        <>
            <nav>
                <div className="logo" onClick={() => { navigate('/') }}>
                    Hotel <span>Skyline</span>
                </div>
                <div className={navbar ? "nav-bar active" : "nav-bar"} id='nav-bar-container'>
                    <div className="nav-links">
                        <ul>
                            <Link to={'/'} onClick={hideNavBar}>home</Link>
                            <hr />
                            <li className="accordian" onClick={showAndHideHeader1DropDownOnClick} onMouseOver={() => { setSubMenu1(true) }} onMouseOut={() => { setSubMenu1(false) }}>
                                about
                                <i className={subMenu1 ? "fa-solid fa-angle-down rotate" : "fa-solid fa-angle-down"}></i>
                                <ul id="sub-menu1" className={subMenu1 ? "sub-menu1 active" : "sub-menu1"}>
                                    <Link to={'/about-page'} onClick={hideNavBar}>about us</Link>
                                    <Link to={'/why-choose-us-page'} onClick={hideNavBar}>why choose us</Link>
                                    <Link to={'/privacy-policy-page'} onClick={hideNavBar}>privacy policy</Link>
                                    <Link to={'/terms-and-condition-page'} onClick={hideNavBar}>terms & conditions</Link>
                                </ul>
                            </li>
                            <hr />
                            <Link to={'/roons-page'} onClick={hideNavBar}>rooms</Link>
                            <hr />
                            <Link to={'/reviews-page'} onClick={hideNavBar}>reviews</Link>
                            <hr />
                            <li className="accordian" onClick={showAndHideHeader2DropDownOnClick} onMouseOver={() => { setSubMenu2(true) }} onMouseOut={() => { setSubMenu2(false) }}>
                                pages
                                <i className={subMenu2 ? "fa-solid fa-angle-down rotate" : "fa-solid fa-angle-down"}></i>
                                <ul id="sub-menu2" className={subMenu2 ? "sub-menu2 active" : "sub-menu2"}>
                                    <Link to={'/spa-and-salon-page'} onClick={hideNavBar}>spa and salon</Link>
                                    <Link to={'/gallery-page'} onClick={hideNavBar}>hotel gallery</Link>
                                    <Link to={'/offers-page'} onClick={hideNavBar}>offers</Link>
                                    <Link to={'/book-room-page'} onClick={hideNavBar}>book room</Link>
                                </ul>
                            </li>
                            <hr />
                            <Link to={'/contact-us'} onClick={hideNavBar}>contact us</Link>
                            <hr />
                        </ul>
                    </div>
                    <div className="sign-up-btn">
                        <Link to={'/book-room-page'} className="sign-up common-button-2" onClick={hideNavBar}>book room</Link>
                    </div>
                </div>
                <div className={menuIcon ? "bars active" : "bars"} onClick={showResponsiveNavBar}>
                    <div className="hamburger-menu"></div>
                </div>
            </nav>
        </>
    )
}

