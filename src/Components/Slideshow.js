import { React, useRef } from 'react';
import './slideshow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image1 from '../assets/imgs/img1.jpg';
import Image2 from '../assets/imgs/img2.jpg';

export default function Slideshow() {
    return (
        <div className='slideshow-container'>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect
                speed={800}
                slidesPerView={1}
                loop
                className={"mySwiper"}
            >

                <SwiperSlide className='swiperslide'>
                    <div className='slider-img-div'>
                        <img src={Image1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperslide'>
                    <div className='slider-img-div'>
                        <img src={Image2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperslide'>
                    <div className='slider-img-div'>
                        <img src={Image1} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}