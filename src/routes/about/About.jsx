import React from 'react';
import image from '../../images/about-image.png';
import Links from '../../links/Links';
import './About.css'

function About() {
    return (
        <div className="about" id="about">                              
            <div className="about__img">
                <img src={image} alt="about-img"/>
            </div>
            <div className="about__desc">
                <p></p>
                <h2>Hello, i'am frontend developer</h2>
                <h5>I create applications on react js</h5>
            </div>
            <Links />
        </div>
    );
}

export default About;