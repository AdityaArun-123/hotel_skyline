import React from 'react'

export const Stars = ({stars}) => {

    const ratingStars = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? //if
                        (<i class="fa-solid fa-star"></i>)
                        : stars >= number ? //else if
                            (<i class="fa-solid fa-star-half-stroke"></i>)
                            : (<i class="fa-regular fa-star"></i>) // else
                }
            </span>
        )
    })
    return (
        ratingStars
    )
}
