import {React, useRef} from 'react';
import './slideshow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from '../assets/logos/marky.jpg';

export default function Slideshow(){
    return(
        <div className='slideshow-container'>
            <Swiper
            modules = {[Navigation, EffectFade]}
            navigation
            effect
            speed = {800}
            slidesPerView = {1}
            loop
            className = {"mySwiper"}
            >
            
            <SwiperSlide className='swiperslide'>
                <img src = {Image} alt = "" />
            </SwiperSlide>
            <SwiperSlide className='swiperslide'>
                <img src = {Image} alt = "" />
            </SwiperSlide>
            <SwiperSlide className='swiperslide'>
                <img src = {Image} alt = "" />
            </SwiperSlide>
            
            </Swiper>
        </div>
    )
}