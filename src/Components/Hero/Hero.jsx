import React from 'react'
import './Hero.css'


function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>Crypto Bored Apes</h1>
                <p>6666 Unique Undercover Creatures, Starting Minting The 12th of December</p>
                <div className='social-icons'>
                    <img src="./images/social-1.png" alt="" />
                    <img src="./images/social-2.png" alt="" />
                    <img src="./images/social-3.png" alt="" />
                    <img src="./images/social-4.png" alt="" />
                    <img src="./images/social-5.png" alt="" />
                </div>
                <button>View On Opensea</button>
            </div>
        </div>
    )
}

export default Hero