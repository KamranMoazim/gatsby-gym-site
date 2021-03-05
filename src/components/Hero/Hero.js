import React from 'react';
import './Hero.module.css'

function Hero({image}) {
    return (
        <div className="banner_area d-flex align-items-center" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Build <span>Your</span> Body</h1>
                        <a href="/" className="button">START NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
