import React from 'react'
import './Team.css'

function Team({ data }) {
    return (
        <div id='team' className='team-container'>
            <div className='team-header'>
                <h1>Meet Our Team</h1>
                <p>Some teams call themselves a family, but we actually are one! all designers with a passion for art</p>
            </div>

            <div className='team-cards'>
                {data.map((card) => (
                    <div key={card.id} className='card-2'>
                        <img src={card.image} alt="" />
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                )
                
                )}
            </div>
        </div>
    )
}

export default Team