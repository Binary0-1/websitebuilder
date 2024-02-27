import React from 'react';
import './footer.css';
import arrowbottom from '../../assets/arrow-down.png';

const footer = () => {
  return (
    <div className='wb-footer-container'>
      <div className='wb-footer-line1'>
        <a href="">Categories</a>
        <a href="">Web builder</a>
        <a href="">Hosting</a>
        <a href="">Data center</a>
        <a href="">Robotic-Automation</a>
      </div>
      <div className='wb-footer-line2'>
      <a href="">Contact</a>
        <a href="">Contact</a>
        <a href="">Privacy policy</a>
        <a href="">Terms of Service</a>
        <a href="">Categories</a>
        <a href="">About</a>
      </div>
      <div className='wb-footer-line3'> 
        <a href="">United States</a>
        <img src={arrowbottom} alt="" />
      </div>
    </div>
  )
}

export default footer
