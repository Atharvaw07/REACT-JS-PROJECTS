import React from 'react'
import './Hero.css'
import dark_arrow_icon from '../../assets/dark-arrow.png'
function Hero() {
    return (
        <div className="hero container" >
            <div className="hero-text">
                <h1>We Ensure eduation for a better world</h1>
                <p>our cutting-edge curriculum is designed to empower students with the knowlegde, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore More <img src={dark_arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
