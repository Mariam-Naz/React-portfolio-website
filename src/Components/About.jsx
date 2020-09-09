import React from 'react';
import Common from './Common';
import web from '../images/about.svg';

const About = () => {
    return (
        <Common content='Welcome to my portfolio'
                subContent='We are the team of talented developers making websites'
                image={web}
                alt='about-image'
                btnText='Contact Now'
                linkto = '/contact'
        />
     )
} 

export default About;