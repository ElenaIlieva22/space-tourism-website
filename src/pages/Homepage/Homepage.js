import React from 'react';
import './Homepage.css'


export function Homepage() {
    return (
        
        <div className="Homepage-container">
            <div className='background'>
                <img src='./images/Bitmap Copy.png'className="bitmap-copy" alt="Bitmap Copy"/>
                <img src='./images/Bitmap.png' className="Bitmap" alt="Bitmap"/>

            </div>
            <div className='Homepage-content'>
                <h3 className="Home-heading">
                SO, YOU WANT TO TRAVEL TO
                </h3>
                <h1 className="Home-inner">SPACE</h1>
                <p className="Home-content">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
        </div>
    )
}