import React from 'react'
import './Roadmap.css'

function Roadmap({ data }) {
    return (
        <div id='roadmap' className='raod-map-section'>
            <div className='head-road-map'>
                <h1>Bored Apes Roadmap</h1>
                <p>This is our roadmap so far, but this is only the beginning we want to build our project around our community, so if you have more ideas we are all ears</p>
            </div>

            <div className='card-road-map'>
                {data.map((card) => (
                    <div key={card.id} className='card'>
                        <img src={card.image} alt="" className='cards-image' />
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap