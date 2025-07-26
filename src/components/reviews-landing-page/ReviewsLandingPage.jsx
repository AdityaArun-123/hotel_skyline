import React, { useCallback, useEffect, useRef, useState } from 'react';
import './review_landing_page.css';
import './reviews_scorecard.css';
import './reviews_list.css';
import { MainHeading } from '../main_heading/MainHeading';
import reviewData from '../../DataBase/reviewData.json';
import scorecardData from '../../DataBase/scorecardData.json';
import { ReviewModal } from '../review-modal/ReviewModal';

export const ReviewsLandingPage = () => {
    const [allReviewData, setAllReviewData] = useState(reviewData);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [writeReviewModal, setWriteReviewModal] = useState(false);
    const [thumbUpState, setThumbUpState] = useState(false);
    const [thumbDownState, setThumbDownState] = useState(false);
    const [like, setLike] = useState([]);
    const [dislike, setDislike] = useState([]);
    const [noOfElements, setNoOfElements] = useState();
    const [showDropDown, setShowDropDown] = useState(false);
    const slice = allReviewData.slice(0, noOfElements);
    const [totalRating, setTotalRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [filterDropdownTop, setFilterDropdownTop] = useState(0);
    const filterButtonRef = useRef();  //use for dynamic positionf of room drop down. This is used to calculate the current available space in bottom of room select box.
    const filterDropDownContentRef = useRef(); //use for dynamic positionf of room drop down. This is used to calculate dynamic height of the room drop down.
    let arry;
    let filters = ["food", "near mall road", "location is great", "good view", "service quality"];

    const filterItems = useCallback(()=>{
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = reviewData.filter((item) => item.review_category === selectedCategory);
                return temp;
            });
            setAllReviewData(tempItems.flat());
        }
        else {
            setAllReviewData([...reviewData]);
        }
    }, [selectedFilters]);

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
            const myJSON1 = JSON.stringify(filters);
            sessionStorage.setItem("reviewLandingSelectedFilters", myJSON1);

        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
            const myJSON2 = JSON.stringify([...selectedFilters, selectedCategory]);
            sessionStorage.setItem("reviewLandingSelectedFilters", myJSON2);
        }
        setNoOfElements(5);
        sessionStorage.setItem("reviewLandingCard", "5");
    };

    useEffect(() => {
        filterItems();
    }, [filterItems]);

    useEffect(() => {
        toggleFilterDropDownTopPosition();
    }, [showDropDown]);

    useEffect(() => {
        window.scrollTo({ left: 0, top: 0 });
        getReviewsLandingPrevNoOfReviewsCard();
        getReviewsLandingPrevSelectedFilters();
        let x = 0;
        let rating_based_on_star = 0;
        scorecardData.forEach((item) => {
            x += item.count;
            rating_based_on_star += item.count * item.star;
        });
        setTotalRating(x);
        setAverageRating(rating_based_on_star);
    }, []);

    const getReviewsLandingPrevNoOfReviewsCard = () => {
        let noOfReviewsCard = sessionStorage.getItem("reviewLandingCard");
        if (noOfReviewsCard === null) {
            sessionStorage.setItem("reviewLandingCard", "5");
            setNoOfElements(parseInt(sessionStorage.getItem("reviewLandingCard")));
        }
        else {
            setNoOfElements(noOfReviewsCard);
        }
    }

    const getReviewsLandingPrevSelectedFilters = () => {
        let x = sessionStorage.getItem("reviewLandingSelectedFilters");
        if (x === "") {
            sessionStorage.setItem("reviewLandingSelectedFilters", "");
        }
        if (x !== "") {
            let parsedArray = JSON.parse(x);
            if (parsedArray !== null) {
                setSelectedFilters(parsedArray)
            }
        }
    }

    const toggleFilterDropDownTopPosition = () => {
        //dynamic positiong of room drop down according to the apace available in bottom of select box
        const filterDropDownSpaceRemaining = window.innerHeight - filterButtonRef.current.getBoundingClientRect().bottom;
        const filterDropDownContentHeight = filterDropDownContentRef.current.clientHeight;
        const filterDropDownTopPosition = (filterDropDownSpaceRemaining > filterDropDownContentHeight) ? null : -filterDropDownContentHeight;
        setFilterDropdownTop(filterDropDownTopPosition);
    }

    const handleSorting = (value) => {
        document.getElementById("filter").innerHTML = document.getElementsByClassName("filter-name")[value].innerHTML;
        if (value === 0) {
            setAllReviewData([...reviewData].sort((a, b) => a.id - b.id));
        }
        else if (value === 2) {
            setAllReviewData([...reviewData].sort((a, b) => new Date(a.review_date) - new Date(b.review_date)));
        }
        else if (value === 3) {
            setAllReviewData([...reviewData].sort((a, b) => b.user_star_rating - a.user_star_rating));
        }
        else if (value === 4) {
            setAllReviewData([...reviewData].sort((a, b) => a.user_star_rating - b.user_star_rating));
        }
        setShowDropDown(!showDropDown);
        setNoOfElements(5);
        sessionStorage.setItem("reviewLandingCard", "5");
    }

    const addLikeColor = (id) => {
        setThumbDownState(!thumbDownState);
        if (!like.includes(id)) {
            like.push(id);
        } else {
            let index = like.indexOf(id);
            arry = like.splice(index, 1);
        }
        let filteredArr1 = dislike.filter(v => v !== id);
        setDislike(filteredArr1);
        setLike(like);
    }

    const addDislikeColor = (id) => {
        setThumbUpState(!thumbUpState);
        if (!dislike.includes(id)) {
            dislike.push(id);
        } else {
            let index = dislike.indexOf(id);
            arry = dislike.splice(index, 1);
        }
        let filteredArr2 = like.filter(v => v !== id);
        setLike(filteredArr2);
        setDislike(dislike);
    }

    const loadMoreData = () => {
        let prevNoOfReviewLandCard = parseInt(sessionStorage.getItem("reviewLandingCard"));
        sessionStorage.setItem("reviewLandingCard", prevNoOfReviewLandCard + 5);
        setNoOfElements(prevNoOfReviewLandCard + 5);
    }

    return (
        <>
            {
                writeReviewModal && <ReviewModal onclose={() => { setWriteReviewModal(false) }} />
            }
            <div className="reviews-page-container" onClick={(e) => { if (e.target.className === "reviews-page-container") { setShowDropDown(false) } }}>
                <MainHeading heading='our reviews' />
                <div className="reviews-page-sub-heading">A collection of the most significant testimonies from our guests</div>
                <p>In this section of our site we wanted to collect some of the testimonials and reviews written by those who
                    spent their holidays at the Hotel Skyline . There are so many testimonials and positive comments written on
                    the web in recent years by all the guests who appreciated, during their holiday here with us, our
                    commitment, our professionalism, our work. All this always fills us with joy and gives us the right energy
                    to always keep the level of our hotel high.</p>


                <div className="review-scorecard-wrapper">
                    <div className="review-scorecard-container">
                        <div className="review-scoreboard">
                            <div className="star-rating-box">
                                <h4>overall ratings</h4>
                                <h1><span>{(averageRating / totalRating).toFixed(1)}</span>/5</h1>
                                <span>{totalRating} ratings</span>
                                <span>{reviewData.length} reviews</span>
                            </div>
                            <div className="score-box">
                                {
                                    scorecardData.map((item, index) =>
                                        <div className="boxes" key={index}>
                                            <div className="side">{item.star} <span><i className="fa-solid fa-star"></i></span></div>
                                            <div className="middle-bar-container">
                                                <div className="bar" style={{ width: ((item.count / totalRating) * 100) + "px" }}></div>
                                            </div>
                                            <div className="side right">{item.count}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="what-our-guest-say">
                            <h4>what our guest say ?</h4>
                            <div className="what-our-guest-say-filters">
                                <ul>
                                    {
                                        filters.map((category, idk) =>
                                            <li key={idk} onClick={() => { handleFilterButtonClick(category) }} className={selectedFilters.includes(category) ? "filter-active" : ""}>{category}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="filter-by" onClick={() => { setShowDropDown(!showDropDown) }}>
                        <span>filter by : </span>
                        <span id='filter' ref={filterButtonRef}>see all reviews</span>
                        <i className={showDropDown ? "fa-solid fa-angle-down rotate" : "fa-solid fa-angle-down"}></i>
                        <div className={showDropDown ? "filter-drop-down show" : "filter-drop-down"} ref={filterDropDownContentRef} style={{ top: filterDropdownTop ? `${filterDropdownTop}px` : "110%" }}>
                            <li onClick={() => { handleSorting(0) }} className='filter-name'>see all reviews</li>
                            <li className='filter-name'>most helpful first</li>
                            <li onClick={() => { handleSorting(2) }} className='filter-name'>most recent first</li>
                            <li onClick={() => { handleSorting(3) }} className='filter-name'>positive reviews</li>
                            <li onClick={() => { handleSorting(4) }} className='filter-name'>negative reviews</li>
                        </div>
                    </div>
                </div>

                <div className="review-list-content">
                    <div className="write-review-btn common-button" onClick={() => { setWriteReviewModal(true) }}>write a review</div>
                    {
                        slice.map((item, index) =>
                            <div className="review-list-review-card" key={index}>
                                <div className="review-list-user-info">
                                    <div className="review-list-user-pic">
                                        <img src={item.user_pic} alt="" />
                                    </div>
                                    <div className="review-list-user-name">{item.user_name}</div>
                                    <div className="review-list-user-ratings">
                                        <span>{item.user_star_rating}</span><span>/</span><span>5</span>
                                    </div>
                                    <div className="review-list-review-date-time">{item.review_date}</div>
                                </div>
                                <div className="review-list-review-para">{item.user_review_msg}</div>
                                <div className="helpful-box">
                                    <span>Found this helpful or not .</span>
                                    <div className="helpful-thumb-icon">
                                        <div><i className={like.includes(item.id) ? "fa-solid fa-thumbs-up active" : "fa-solid fa-thumbs-up"} onClick={() => { addLikeColor(item.id) }}></i><span>{item.review_helpful}</span></div>
                                        <div><i className={dislike.includes(item.id) ? "fa-solid fa-thumbs-down active" : "fa-solid fa-thumbs-down"} onClick={() => { addDislikeColor(item.id) }}></i><span>{item.review_not_helpfull}</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className={noOfElements >= allReviewData.length - 1 ? "load-more-btn deactive common-button" : "load-more-btn common-button"} onClick={loadMoreData}>load more</div>
                </div>
            </div>
        </>
    )
}
