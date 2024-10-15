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
    <div className='testimony__container bg-custom-gradient overflow-hidden'>
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
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>From Aspiring To Acheivment</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/1.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>John Doe</h3>
                <p className='italic'>/ Aspiring WayOutKids Sponsor</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>A Journey of a Thousand Miles</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/2.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Jane Doe</h3>
                <p className='italic'>/ Co Founder of JD Co.</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Making A Lasting Impact</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/3.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Susy Sally</h3>
                <p className='italic'>/ Assistant of the CEO</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Empowered and Equipped</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/4.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Peter Parker</h3>
                <p className='italic'>/ Friendly Neighborhood Spider-Man</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Lifelong Learning Success</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/5.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Dr. Octavius</h3>
                <p className='italic'>/ Professor of Science</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Inspiring Transformation</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/6.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Judy Moody</h3>
                <p className='italic'>/ Student of St. Jude's</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Building Confidence, Changing Lives</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/7.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Jack Sparrow</h3>
                <p className='italic'>/ Captain of the Black Pearl</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>Creating Pathways to Success</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/8.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Cutie Patootie</h3>
                <p className='italic'>/ Cute Sponsors Attendee</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='border border-red-500 mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-8 text-vDeepBlue font-extrabold'>A Community That Cares</h2>
                <p className='text-myBlack font-semiBold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='w-full h-auto rounded-full object-cover' src="/images/testimony/9.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold'>Mac Donald</h3>
                <p className='italic'>/ Owner of Farmland</p>
            </div>
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
