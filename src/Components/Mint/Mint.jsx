import React from 'react'
import './Mint.css'

function Mint() {
    return (
        <div id='mint' className='mint-section'>
            <div className='mint-elements'>
                <div className='mint'>
                    <h1>Project Size</h1>
                    <span>6,666</span>
                    <p>NFT's</p>
                </div>

                <div className='mint'>
                    <h1>Mint Price</h1>
                    <span>3.078</span>
                    <p>Polygon</p>
                </div>

                <div className='mint'>
                    <h1>Mint Date</h1>
                    <span>11th*</span>
                    <p>February</p>
                </div>

                <div className='mint-btn'>
                    <button>Mint Now</button>
                </div>
            </div>
            <div className='image-mint'>
                <img src="./images/010.png" alt="" />
            </div>
        </div>
    )
}

export default Mint