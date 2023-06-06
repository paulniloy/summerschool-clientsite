import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
  // import Swiper JS
  import 'swiper/css';

// Import Swiper styles
import "./style.css";

import "./style.css";

// import required modules
import { Pagination } from "swiper";
import Slidertext from './Slidertext';

const Slider = () => {
    return (
        <div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='flex-col'><Slidertext heading={'Guitar'} message={"From 10am to 12pm"} info={'Enhance the guitar skill'}></Slidertext>
            <img src="https://www.cityguideny.com/columnpic2/music-camp1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex-col'><Slidertext heading={'Saxophone'} message={"From 12pm to 2pm"} info={'Enhance your saxophone skill'}></Slidertext>
            <img src="https://educamp.bju.edu/images/camps/_1000xAUTO_crop_center-center/20160714jr-music-de02.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex-col'><Slidertext heading={'Piano'} info={"Enhance your Piano skill"} message={'From 2pm to 4pm'}></Slidertext>
            <img src="https://www.musiclifestyle.sg/pub/media/magefan_blog/blog2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex-col'>Slide 5</SwiperSlide>
        <SwiperSlide className='flex-col'>Slide 6</SwiperSlide>
        <SwiperSlide className='flex-col'>Slide 7</SwiperSlide>
        <SwiperSlide className='flex-col'>Slide 8</SwiperSlide>
        <SwiperSlide className='flex-col'>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;