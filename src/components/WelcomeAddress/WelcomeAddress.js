import React from 'react';
import './welcomeAddress.css';
import Director from './../../images/directorImage.jpg';

const WelcomeAddress = () => {
  return (
    <section className='welcome-address'>
        <div>
        <img src={Director} alt='' />
        <p>Thanks for Visiting our official website. We are excited to have you at the helm of our ship. I look forward to the growth of our business relationship as you navigate us towards further success. Welcome aboard!</p>
        </div>
        
    </section>
  )
}

export default WelcomeAddress;