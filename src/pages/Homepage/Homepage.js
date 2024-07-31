import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className='background'>
                <img src='./images/Bitmap Copy.png' className="image-overlay first" alt="Bitmap Copy" />
                <img src='./images/Bitmap.png' className="image-overlay second" alt="Bitmap" />
            </div>
            <div className='homepage-content'>
                <h3 className="home-heading">SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className="home-inner">SPACE</h1>
                <p className="home-content">Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>            
            <button className="explore-btn">EXPLORE</button>
        </div>
    );
};

export default Homepage;
