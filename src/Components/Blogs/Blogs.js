import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h1>This is Blogs</h1>
            <div className='bloges-section'>
                <div className='context-API half-width'>
                    <h2>Context API</h2>
                    <p>The Context API in React is a feature that allows you to share state and functions between components without having to pass props manually through every level of the component tree. It provides a way to manage state at a global level within your application.</p>
                </div>
                <div className='semantic-tag half-width'>
                    <h2>Semantic Tag</h2>
                    <p>Semantic tags in HTML are elements that carry meaning about the structure and content of the document, rather than just serving as presentational elements. They play a crucial role in creating a well-structured and accessible web page. Semantic tags provide information to both browsers and developers about the purpose and meaning of the content they enclose.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;