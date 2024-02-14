import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta'>

      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
       
      <div className='gpt3__cta-btn'>
           <button type='button' > <a href="https://openai.com/" target='_blank'> Get Started </a> </button>
      </div>

    </div>
  )
}

export default CTA