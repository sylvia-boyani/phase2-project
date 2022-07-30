import React from 'react';
import "./App.css";
import { Button } from './Button';
import "./HeroSection.css"

export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src='/public/videos/Catalonia Spain.mp4' autoPlay loop muted />
        <h1>Come On, Let's Go</h1>
        <p>What are you waiting for? </p>
        <div className='hero-btns'>
         <Button
         className="btns"
         buttonStyle="btn--outline"
         buttonSize="btn--large">
            GET STARTED
         </Button>
        </div>
    </div>
  )
}


export default HeroSection
