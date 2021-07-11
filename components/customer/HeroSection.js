import React from 'react';
import '../../App.css';
import {Button} from '../Button';
import './HeroSection.css'

 function HeroSection() {
     return(
         <div className = 'hero-container'>
             <video src='/videos/video-2.mp4' autoPlay loop muted />
             <h1>OUR SHOWROOM</h1>
             <p>Why are you waiting for?</p>
             <div className='hero-btns'>
                 <Button
                 className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                 buttonColor='white'
                 >
                     ORDER NOW
                 </Button>
             </div>
         </div>
     )
 }
export default HeroSection
