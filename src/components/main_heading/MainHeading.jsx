import React from 'react';
import './main_heading.css';

export const MainHeading = (props) => {
    return (
        <div className="main-heading-container">
            <div className="heading">
                {props.heading}
            </div>
        </div>
    )
}
