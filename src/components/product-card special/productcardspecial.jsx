import React from 'react';
import './productcardspecial.css';
import cardimage from '../../assets/card-image.png';
import arrowbottom from '../../assets/arrow-down.png';
import stars from './star.png';

const Productcard = (props) => {
  return (
    <div className='wb-productcard-container'>
      <div className='wb-productcard-image'>
        <p className='wb-productcard-number'>1</p>
        <img src={cardimage} alt="cardimage" />
        <p className='wb-productname-title'>CDK</p>
      </div>
      <div className='wb-productcard-info'>
        <p dangerouslySetInnerHTML={{__html: props.maininfo}}></p>
        <p>Main Highlights</p>
        <div className='wb-productcard-specialdiv'>
          <div><a href="">9.9</a><a href="">Building Responsive</a></div>
          <div><a href="">8.9</a><a href="">Cool</a></div>
          <div><a href="">8.9</a><a href="">Docs</a></div> 
        </div>
        <div className='wb-productcard-showmore'>
        <a href="#">Show more <img src={arrowbottom} alt="#" /></a>
        </div>
      </div>
      <div className='wb-productcard-rating'>
        <div className='wb-productcard-ratinginfo-value'>
                <p>9.8</p>
                <p>Exceptional</p>
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
