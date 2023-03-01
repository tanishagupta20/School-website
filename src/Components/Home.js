import React from 'react';
import Slideshow from './Slideshow.js';
import './Home.css';
import Image from '../assets/logos/marky.jpg';
import brochure1 from '../assets/brochures/SSSbrochure1.jpg'

function Home() {
  return (
    <div>

      {/* M   A   R   Q   U   E   E        T   E   X   T */}
      <marquee className="moving-text" width="100%" direction="left" height="100px">
        A D M I S S I O N S  &nbsp; &nbsp;   O P E N &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; W E ' R E &nbsp; &nbsp; H I R I N G&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href = {brochure1} target = "_blank">B R O C H U R E</a>
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

      <div className='facilities-parent'>
        <h1>Facilities</h1>

        <div className='facilities-flex'>
          <div className='facility-div'>
            <h4>Qualified, dedicated and inspiring faculty</h4>
            <p>A knowledgeable faculty can offer specific knowledge and abilities, and commitment and motivation are crucial in creating a healthy learning environment and assisting students in achieving their full potential.</p>
          </div>
          <div className='facility-div'>
            <h4>Creating an English atmosphere</h4>
            <p>The improvement of pupils' language abilities is given priority in our school that places a high priority on developing an English-speaking environment and delivering high-quality instruction.</p>
          </div>
          <div className='facility-div'>
            <h4>Yoga, Aerobics and P.T.</h4>
            <p>Yoga, aerobics, and physical training programs are available at our school to assist students stay physically fit, manage stress, and improve their focus and mental alertness. A well-rounded education must include physical activities since they keep pupils fit and enable them to concentrate on their schoolwork.</p>
          </div>
          <div className='facility-div'>
            <h4>Stress Free Education and Healthy Environment</h4>
            <p>Our institution offers students a stress-free educational experience and a positive environment that supports their mental and emotional well-being.</p>
          </div>
          <div className='facility-div'>
            <h4>RO System and good Sanitation Facilities</h4>
            <p>Our school guarantees that kids remain healthy and free from infections by providing a clean and hygienic environment with good sanitation facilities, including a RO system for safe drinking water.</p>
          </div>
          <div className='facility-div'>
            <h4>Well furnished Classrooms</h4>
            <p>A school that provides well-furnished classrooms is equipped with modern teaching aids, such as interactive whiteboards, projectors, and comfortable seating arrangements. These resources help create an engaging and effective learning environment that helps students learn more effectively.</p>
          </div>
          <div className='facility-div'>
            <h4>Shaping the minds of tiny tots and setting new standards</h4>
            <p>In order to give pupils a solid basis for both their academic and personal growth, our school lays a heavy emphasis on developing young children's minds and establishing new standards. This can entail giving kids the chance to explore and learn new things, motivating them to ask questions, and fostering the development of their critical thinking abilities.</p>
          </div>
          <div className='facility-div'>
            <h4>Conducting various competitions to inculcate in children a 'Seeking Spirit'</h4>
            <p>Several competitions are held at our school to support pupils to cultivate an inquiry-based mindset and a thirst for knowledge. Teamwork and leadership abilities can be developed through competitions.</p>
          </div>
          <div className='facility-div'>
            <h4>Audio, Visual (Video) Smart Playway Teaching Method for Play Way Section</h4>
            <p>To engage students in their learning and make it more interesting and successful, our school combines audio, visual, and video-based teaching methods. Play way methods are child-centric and emphasize hands-on learning and exploration.</p>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Home