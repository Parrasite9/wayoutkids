import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimony() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>John Doe</h3>
                <p>/ Aspiring WayOutKids Sponsor</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Jane Doe</h3>
                <p>/ Co Founder of JD Co.</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Susy Sally</h3>
                <p>/ Assistant of the CEO</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Peter Parker</h3>
                <p>/ Friendly Neighborhood Spider-Man</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Dr. Octavius</h3>
                <p>/ Professor of Science</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Judy Moody</h3>
                <p>/ Student of St. Jude's</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Jack Sparrow</h3>
                <p>/ Captain of the Black Pearl</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>Title</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Cutie Patootie</h3>
                <p>/ Cute Sponsors Attendee</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-Bold'>TITLE</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </div>
            <div className="name__container ml-8">
                <h3>Mac Donald</h3>
                <p>/ Owner of Farmland</p>
            </div>
          </div>
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}
