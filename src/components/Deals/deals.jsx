import React from 'react';
import './deals.css';
import computer from '../../assets/card-image.png'

const Deals = () => {
  return (
    <div className="wb-deals-container">
        <div className='wb-deals-container-heading'><p>Related deals you might look for</p></div>
        <div className='wb-deals-card-layout'>
            <div className='wb-deals-card'>
                <div className='wb-deals-card-image'>
                    <img src={computer} alt="" />
                </div>
                <div className='wb-deals-card-Info'>
                    <div className='wb-deals-card-perks'>
                        <a href="">20% Off</a><a href="">Limited time</a>
                    </div>
                    <div className='wb-deals-card-title'><a href="">Webbuilder 1</a></div>
                    <div className='wb-deals-card-titleinfo'><p>Computer  Modern clasic with wix support</p></div>
                    <div className='wb-deals-card-pricing'><p>$39.96</p><p>$49.96</p><p>(20% Off)</p></div>
                    <div className='wb-deals-card-button-container'>
                        <button className='wb-deals-card-button'></button>
                    </div>
                </div>
            </div>
            <div className='wb-deals-card'>
                <div className='wb-deals-card-image'>
                    <img src={computer} alt="" />
                </div>
                <div className='wb-deals-card-Info'>
                    <div className='wb-deals-card-perks'>
                        <a href="">20% Off</a><a href="">Limited time</a>
                    </div>
                    <div className='wb-deals-card-title'><a href="">Webbuilder 1</a></div>
                    <div className='wb-deals-card-titleinfo'><p>Computer  Modern clasic with wix support</p></div>
                    <div className='wb-deals-card-pricing'><p>$39.96</p><p>$49.96</p><p>(20% Off)</p></div>
                    <div className='wb-deals-card-button-container'>
                        <button className='wb-deals-card-button'></button>
                    </div>
                </div>
            </div>
            <div className='wb-deals-card'>
                <div className='wb-deals-card-image'>
                    <img src={computer} alt="" />
                </div>
                <div className='wb-deals-card-Info'>
                    <div className='wb-deals-card-perks'>
                        <a href="">20% Off</a><a href="">Limited time</a>
                    </div>
                    <div className='wb-deals-card-title'><a href="">Webbuilder 1</a></div>
                    <div className='wb-deals-card-titleinfo'><p>Computer  Modern clasic with wix support</p></div>
                    <div className='wb-deals-card-pricing'><p>$39.96</p><p>$49.96</p><p>(20% Off)</p></div>
                    <div className='wb-deals-card-button-container'>
                        <button className='wb-deals-card-button'></button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Deals
