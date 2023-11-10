import React from 'react';
import './Home.css';
import useReviews from '../../Hooks/useReviews';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import BooksApplicationImage from '../../assets/Books-Application.png';

const Home = () => {

    const [reviews] = useReviews();
    const navigate = useNavigate()
    
    const getRandomReviews = (reviews, count) => {
        const shuffled = reviews.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    
    const threeRandomReviews = getRandomReviews(reviews, 3);

    return (<section>
                <div className='home-section '>
                    <div className="banner-details half-width">
                        <h1>Welcome to<br></br> Books Application</h1>
                        <p>Discover a world of amazing books and dive into captivating stories that will transport you to new adventures.</p>
                    </div>
                    <div className="banner-img half-width">
                        <img src={BooksApplicationImage} alt="" />
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