import React from 'react';
import './Actionbar.css';


const Actionbar = () => {
  return (
    <div className="wb-actionbar-buttoncontainer">
        <button className="wb-actionbar-buttons">Tools</button>
        <button className="wb-actionbar-buttons">AWS Builder</button>
        <button className="wb-actionbar-buttons">Start Build</button>
        <button className="wb-actionbar-buttons">Build Supplies</button>
        <button className="wb-actionbar-buttons">Tooling</button>
        <button className="wb-actionbar-buttons">Blue Hosting</button>
    </div>
  )
}

export default Actionbar
