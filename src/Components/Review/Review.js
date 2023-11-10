import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = (props) => {
    const {reviewsHome} = props;

    const [reviews] = useReviews();
    // console.log(reviews.slice(0,3));

    return (
        <div>
            <h1>Customer Reviews({reviews.length})</h1>
            <div className='Review-section'>
                {
                    reviews.map(review => <ReviewItem
                        key={review.id}
                        review = {review}
                        reviewsHome = {reviewsHome}
                    ></ReviewItem>)
                }
                
            </div>
        </div>
    );
};

export default Review;