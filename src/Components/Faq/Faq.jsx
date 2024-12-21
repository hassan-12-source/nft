import React, { useState } from 'react'
import './Faq.css'
import faq from './data';

function Faq() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div id='faq' className='faq-wrapper'>
            <div className='faq-container'>
                <div className='faq-header'>
                    <h1>F.A.Q
                        Questions</h1>
                </div>

                {faq.map((item, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
                        <div className='faq-question' onClick={() => toggleFaq(index)}>
                            <h3>{item.question}</h3>
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='faq-image-container'>
                    <img src="./images/01.png" alt="" />
                </div>
        </div>
    )
}

export default Faq