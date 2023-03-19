import React from 'react'
import Slideshow from './Slideshow.js';
import './About.css'

function About() {
  return (
    <div className='about-container'>
        <div className='about-us'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum ullam molestiae. Possimus, minus impedit, sequi accusantium quae est similique tenetur sint totam alias velit? Modi consectetur rerum repudiandae itaque doloribus vitae!</p>
        </div>
        <div className='slideshow-div'>
            {/* <Slideshow /> */}
        </div>
    </div>
  )
}

export default About