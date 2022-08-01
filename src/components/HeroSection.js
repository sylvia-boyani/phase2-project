import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import axios from 'axios';
import {useEffect, useState} from "react";
// import { Card } from "react-bootstrap";

function HeroSection() {
  const [data, setData] =useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://travel-videos.herokuapp.com/travelvideos')
    .then(response =>  {
      if (response.ok ){
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData (data);
    })
    .catch(error => {
      console.error("Error fetchin data: ", error);
      setError(error);
    })
    .finally(()=> {
      setLoading(false);
    })
  }, [])
    
  if (loading) return "Loading....";
  if (error) return "Error!";

  return (
    <div className='hero-container'>
      <video src={'./videos/vd.mp4'} autoPlay loop muted />
      <h1>Come On Let's Go! Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
