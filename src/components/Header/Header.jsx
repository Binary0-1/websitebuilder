import React,{useState} from 'react';
import "./Header.css";
import Check from '../../assets/Check.png';
import Info from '../../assets/Info.png';
import arrowbottom from '../../assets/arrow-down.png'

const Header = () => {
const [Heading, setHeading] = useState("Best Website builders in the US");
const [date,setdate] = useState("February 22,2020")
  return (
    <>
    <div className="wb-header-container">
      <div className="wb-header-heading">
        <h1>{Heading}</h1>
      </div>
      <div className="wb-header-stats">
        <img src={Check} alt="" />
        <a href="#">Last updated - {date}</a>
        <img src={Info} alt="" />
        <a href="#">Advertising Disclosure</a>
        <div className="wb-header-relevance">
        <a href="#">Top Relevant</a>
        <img src={arrowbottom} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
