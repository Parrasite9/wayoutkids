import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Testimony() {
  return (
    <div className='testimony__container bg-custom-gradient overflow-hidden pt-4 pb-4'>
        <div className="testimony__header pb-4 px-4 md:text-center">
            <h3 className='mt-10 text-vDeepBlue font-semibold'>Inspiring Stories</h3>
            <h2 className='font-bold text-darkGreen text-2xl mb-4'>Discover The Stories Behind Our Missions Success</h2>
        </div>
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
        loop={true}
        // Autoplay and Pagination settings
        autoplay={{
            delay: 3000,                 // Delay between slides (in milliseconds)
            disableOnInteraction: false, // Do not stop autoplay when user interacts
        }}
        pagination={{clickable: true}}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
            // when the window is >= 768px (medium devices)
            768: {
              slidesPerView: 2, // Show 2 slides per view for medium devices
            },
            // when the window is >= 1024px (large devices)
            1024: {
              slidesPerView: 3, // Show 3 slides per view for large devices
            },
          }}
      >
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>From Aspiring To Acheivment</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/1.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>John Doe</h3>
                <p className='italic xl:text-md'>/ Aspiring WayOutKids Sponsor</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>A Journey of a Thousand Miles</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/2.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Jane Doe</h3>
                <p className='italic xl:text-md'>/ Co Founder of JD Co.</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Making A Lasting Impact</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/3.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Susy Sally</h3>
                <p className='italic xl:text-md'>/ Assistant of the CEO</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Empowered and Equipped</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/4.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Peter Parker</h3>
                <p className='italic xl:text-md'>/ Friendly Neighborhood Spider-Man</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Lifelong Learning Success</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/5.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Dr. Octavius</h3>
                <p className='italic xl:text-md'>/ Professor of Science</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Inspiring Transformation</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/6.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Judy Moody</h3>
                <p className='italic xl:text-md'>/ Student of St. Jude's</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Building Confidence, Changing Lives</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/7.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Jack Sparrow</h3>
                <p className='italic xl:text-md'>/ Captain of the Black Pearl</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>Creating Pathways to Success</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/8.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Cutie Patootie</h3>
                <p className='italic xl:text-md'>/ Cute Sponsors Attendee</p>
            </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
            <div className="testimony__text__container px-4">
                <h2 className='mt-4 text-vDeepBlue font-extrabold xl:text-lg'>A Community That Cares</h2>
                <p className='text-myBlack font-semiBold xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias odit, cumque minus maxime possimus!</p>
            </div>
          <div className="image__and__name flex p-4">
            <div className="image__container w-1/5">
                <img className='lg:w-3/4' src="/images/testimony/9.png" />
            </div>
            <div className="name__container ml-8">
                <h3 className='text-darkGreen font-bold xl:text-lg'>Mac Donald</h3>
                <p className='italic xl:text-md'>/ Owner of Farmland</p>
            </div>
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
