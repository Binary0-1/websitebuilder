import React from 'react';
import './productcard.css';
import cardimage from '../../assets/card-image.png';
import arrowbottom from '../../assets/arrow-down.png';
import stars from './star.png';


const Productcard = (props) => {
  return (
    <div className='wb-productcard-container'>
      <div className='wb-productcard-image'>
        <p className='wb-productcard-number'>1</p>
        <img src={cardimage} alt="cardimage" />
      </div>
      <div className='wb-productcard-info'>
        <p dangerouslySetInnerHTML={{__html: props.maininfo}}></p>
        <p>Main Highlights</p>
        <p>{props.addinfo}</p>
        <div className='wb-productcard-showmore'>
        <a href="#">Show more <img src={arrowbottom} alt="#" /></a>
        </div>
      </div>
      <div className='wb-productcard-rating'>
        <div className='wb-productcard-ratinginfo-value'>
          <div><p>9.8</p>
                <p>Exceptional</p></div>
                <div className='image'>
              <img src={stars} alt=""  /></div>
        </div>
        
        <div>
        <button className='wb-productcard-viewbutton'>View</button>
        </div>
      </div>
    </div>
  )
}

export default Productcard
