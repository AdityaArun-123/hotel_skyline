import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './review_modal.css';
import './star-rating.css';
import { toast } from 'react-toastify';

export const ReviewModal = ({ onclose }) => {
    const [starValue, setStarValue] = useState();
    const [finalStarRating, setFinalStarRating] = useState();
    const [userRating, setUserRating] = useState({
        user_pic: "Gallery/User Pic/customer 1.jpg",
        user_name: "",
        user_review_msg: "",
        review_date: "",
        review_time: "",
        user_star_rating: ""
    });

    const starCounting = (x) => {
        if (x === 0) {
            setFinalStarRating(0.5)
        }
        else if (x === 1) {
            setFinalStarRating(1)
        }
        else if (x === 2) {
            setFinalStarRating(1.5)
        }
        else if (x === 3) {
            setFinalStarRating(2)
        }
        else if (x === 4) {
            setFinalStarRating(2.5)
        }
        else if (x === 5) {
            setFinalStarRating(3)
        }
        else if (x === 6) {
            setFinalStarRating(3.5)
        }
        else if (x === 7) {
            setFinalStarRating(4)
        }
        else if (x === 8) {
            setFinalStarRating(4.5)
        }
        else if (x === 9) {
            setFinalStarRating(5)
        }
        setStarValue(x);
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserRating({ ...userRating, [name]: value })
    }

    const sendUserReview = (event) => {
        event.preventDefault();
        const date = new Date();
        const formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        const formatTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        userRating.review_date = formatDate;
        userRating.review_time = formatTime;
        userRating.user_star_rating = finalStarRating;
        toast.info("Thanks for your Review...");
        onclose();
    }

    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        return () => {
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }
    }, []);

    const closeReviewModal = () => {
        document.querySelector(".review-modal-container").classList.remove("open");
        document.querySelector(".write-review-content").classList.remove("open");
        document.querySelector(".review-modal-container").classList.add("hide");
        document.querySelector(".write-review-content").classList.add("hide");
        setTimeout(() => {
            onclose();
        }, 300);
    }

    return ReactDOM.createPortal(
        <>
            <div className="review-modal-container open" onClick={(e) => { if (e.target.className === "review-modal-container open") { closeReviewModal(); } }}></div>
            <div className="write-review-content open">
                <div className="write-review-heading">share your experience with us</div>
                <div className="star-container">
                    {
                        new Array(10).fill(0).map((_, index) => {
                            return (
                                <span onClick={() => { starCounting(index) }} className={index <= starValue ? "active" : ""}>
                                    <i className={index % 2 === 0 ? "fa-solid fa-star-half" : "fa-solid fa-star-half fa-flip-horizontal"}></i>
                                </span>
                            )
                        })
                    }
                </div>
                <form action="#" onSubmit={sendUserReview} method='post'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user_name" id="name" placeholder='Enter your name' onChange={handleInput} />
                    <label htmlFor="review">Write a Review</label>
                    <textarea name="user_review_msg" id="review" placeholder='Your Experience With Us...' onChange={handleInput}></textarea>
                    <button type="submit" className="post-review-btn common-button">Post</button>
                </form>
                <div className="review-modal-close-btn" onClick={closeReviewModal}><i className="fa-regular fa-circle-xmark"></i></div>
            </div>
        </>,
        document.getElementById("modalDiv")
    )
}
