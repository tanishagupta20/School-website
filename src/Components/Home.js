import React from 'react';
import Slideshow from './Slideshow.js';
import Facilities from './Facilities.js';
import './Home.css';
import Image from '../assets/logos/marky.jpg';
import brochure1 from '../assets/brochures/SSSbrochure1.jpg'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* M   A   R   Q   U   E   E        T   E   X   T */}
      <marquee className="moving-text" width="100%" direction="left" height="100px">
        A D M I S S I O N S  &nbsp; &nbsp;   O P E N &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; W E ' R E &nbsp; &nbsp; H I R I N G&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href={brochure1} target="_blank">B R O C H U R E</a>
      </marquee>

      {/* S   L   I   D   E   S   H   O   W */}

      <Slideshow />

      {/* S   C   R   O   L   L      D   O   W   N      A   R   R   O   W */}
      <div className='scroll-down-arrow'>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* T   A   G   L   I   N   E */}
      <div className='school-tagline'>
        Knowledge&nbsp;&nbsp;is&nbsp;&nbsp;Power
      </div>

      {/* W   I   S   E     W   O   R   D   S */}

      <div className='img-words-parent'>
        <h1>The Principal</h1>
        <div className='img-words'>
          <div className='principal-img'>
            <img src={Image} alt='Renu Gupta' />
          </div>

          <div className='principal-words'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum ullam molestiae. Possimus, minus impedit, sequi accusantium quae est similique tenetur sint totam alias velit? Modi consectetur rerum repudiandae itaque doloribus vitae!</p>
          </div>
        </div>
      </div>

      {/* D   I   V   I   D   E   R  */}

      <section class="semicircle"></section>

      {/* F   A   C   I   L   I   T   I   E   S */}

      <Facilities />

      {/* M   A   P */}

      <div className="googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.074196212632!2d76.81172885013075!3d30.518941002867138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc0bd4ec5dc99%3A0xf572f957b02182c0!2sShivam%20Smart%20School%2C%20Dappar!5e0!3m2!1sen!2sin!4v1678012964288!5m2!1sen!2sin" width="1050" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* F   O   O   T   E   R  */}

      <div className='school-footer'>
        <div className='school-contact-no info-margin-top'>
          <ul className='ul-properties'>
            <li>999999999</li>
            <li>999999999</li>
            <li>999999999</li>
          </ul>
        </div>

        <div className='school-social info-margin-top'>
          <ul className='ul-properties hz-list'>
            <li>
              <Link to="#"><FaInstagram /></Link>
            </li>
            <li>
              <Link to="#"><FaYoutube /></Link>
            </li>
            <li>
              <Link to="#"><FaFacebook /></Link>
            </li>
          </ul>
        </div>

        <div className='school-email info-margin-top'>
          <ul className='ul-properties'>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Home