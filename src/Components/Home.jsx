import React from 'react';
import Common from './Common';
import web from '../images/home-image.svg';


const Home = () => {
    return (
       <Common content='Grow your business with'
               subContent='Professional websites build here'
               image={web}
               alt='home-image'
               btnText='Get Started'
               linkto = '/service'
       />
    )
} 

export default Home;