import React from 'react';
import '../../App.css';

export default function Services() {
  return <h1 className='services'>
     <video src={'/videos/videoS.mp4' }autoPlay loop muted />
    {/* SERVICES */}
    <h1>SERVICES</h1>
    <div className='services' id='services'>
      <p className='footer-subscription-text'>
          <h4>- Free Food. I'll cater for food through the whole trip.</h4>
          <h4>- Taste any foreign Cuisines of interest!</h4>
          <h4>- Travel in style. Affordable and comfortable journey.</h4>
          <h4>- Activities. Surfing, Sky diving, Canoeing and Skiing.</h4>
          <h4>- Our adventure trips will be for sure memorable. Be sure to join me.</h4>
          <h4>- Experience Culture, see landscapes, go shopping,</h4>
          <h4>- Explore the architecture, gastronomy, infrastructure of places.</h4>
          
        </p>
        </div>
    </h1>;
}
