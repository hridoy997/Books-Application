import React from 'react';
import './Home.css';
import Review from '../Review/Review';
import useReviews from '../../Hooks/useReviews';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {

    const [reviews] = useReviews();
    const navigate = useNavigate()
    
    const getRandomReviews = (reviews, count) => {
        const shuffled = reviews.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    
    const threeRandomReviews = getRandomReviews(reviews, 3);
    // console.log(threeRandomReviews);

    return (<section>
                <div className='home-section half-width'>
                    <div className="banner-details home-section">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio.</h1>
                    </div>
                    <div className="banner-img half-width">
                        <h2>Image section</h2>
                    </div>
                </div>

                <div>
                    <h1>Customer Reviews({threeRandomReviews.length})</h1>
                    <div className='Review-section'>
                    {
                        threeRandomReviews.map(review => <ReviewItem
                            key={review.id}
                            review = {review}
                            reviewsHome = {threeRandomReviews}
                        ></ReviewItem>)
                    }
                    
                    </div>
                    <button onClick={()=>navigate('/review')} className='review-btn'>See all review</button>
                </div>
                
                
            </section>);
};

export default Home;