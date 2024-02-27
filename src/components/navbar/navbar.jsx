import React from 'react';
import './navbar.css';
import searchicon from './image.svg';

const navbar = () => {
  return (
    <div className='wb_navbar-container'>
        <div className='wb_navbar-searchcontainer'>
        <img src={searchicon} alt=""  className='wb_navbar-searchicon'/>
        <input type="text" name="search" id="searchid" />
        </div>
        <div className='wb_navbar-links'>
        <a href="">Categories</a>
        <a href="">Website Builder</a>
        <a href="">Today's deals</a>
        </div>
    </div>
  )
}

export default navbar
