import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashBord">DashBord</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;