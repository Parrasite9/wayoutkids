// src/components/Packages/ReactSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../Packages/CSS/ReactSwiper.css';

// Define your slides data
const slides = [
  { src: 'images/image1.png', alt: 'Slide 1', border: 'border-blue-500' },
  { src: 'images/image2.png', alt: 'Slide 2', border: 'border-green-500' },
  { src: 'images/image3.png', alt: 'Slide 3', border: 'border-yellow-500' },
];

// Duplicate slides to assist with looping
const loopedSlides = [...slides, ...slides, ...slides]; // Duplicate as needed

const ReactSwiper = () => {
  return (
    <Swiper
      initialSlide={slides.length} // Start at the first slide of the duplicated array
      slidesPerView={1.75}          // Show one full slide and partial adjacent slides
      spaceBetween={20}           // Adjust for desired overlap
      centeredSlides={true}
      loop={true}
      loopedSlides={slides.length} // Set to the original number of slides
      grabCursor={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,                  // No depth scaling
        modifier: 1,
        slideShadows: false,
      }}
    >
      {loopedSlides.map((slide, index) => (
        <SwiperSlide key={index} className="w-[200px] aspect-square">
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-full object-cover border-8 ${slide.border}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiper;
