import React, { useState } from 'react';
import './ReviewItem.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ReviewItem = ({review,reviewsHome}) => {

    const {name, img, date,ratingValue, review_text} = review;
    const [rating, setRating] = useState(ratingValue);
    return (
        <div className='reviewItem'>
            <div className="review-details">
                <div className="review-info">
                    <div className="review-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="review-Name-rating">
                        <h3>{name}</h3>
                        <div>
                            <Rating style={{ maxWidth: 120 }} value={rating}/>
                            <h4>{ratingValue}.0</h4>
                        </div>
                    </div>
                </div>
                
                <div className="review-date">
                    <p>Date: {date}</p>
                </div>
            </div>
            <div className="revierText">
                <p>{review_text}</p>
            </div>
        </div>
    );
};

export default ReviewItem;