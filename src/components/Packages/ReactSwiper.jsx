// src/components/Packages/ReactSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../Packages/CSS/ReactSwiper.css';

// Import required modules
import { Autoplay } from 'swiper/modules'; // Only keep Autoplay

// ICONS 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Define your slides data
const slides = [
  { src: 'images/image1.png', alt: 'Slide 1', border: 'border-blue-500'  , title: 'Lorum Ipsum', cta: 'Learn More' },
  { src: 'images/image2.png', alt: 'Slide 2', border: 'border-green-500' , title: 'Lorum Ipsum', cta: 'Become a Vendor' },
  { src: 'images/image3.png', alt: 'Slide 3', border: 'border-yellow-500', title: 'Lorum Ipsum', cta: 'Help Our Mission' },
];

const ReactSwiper = () => {
  return (
    <Swiper
      initialSlide={slides.length} // Start at the first slide of the duplicated array
      slidesPerView={1.75}         // Show one full slide and partial adjacent slides
      spaceBetween={20}            // Adjust for desired overlap
      centeredSlides={true}
      loop={true}
      loopedSlides={slides.length} // Set to the original number of slides
      grabCursor={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,                   // No depth scaling
        modifier: 1,
        slideShadows: false,
      }}
      // Autoplay settings
      autoplay={{
        delay: 50000,                 // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Do not stop autoplay when user interacts
      }}
      modules={[Autoplay]} // Only keep Autoplay module
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="w-[200px] aspect-square">
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-full object-cover border-8 ${slide.border}`}
          />

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-between text-white bg-black bg-opacity-50 py-5">
        {/* Title at the top-left */}
        <h3 className="text-lg font-bold self-start align-center pl-5">{slide.title}</h3>

        {/* CTA Text and Arrow at the bottom-right */}
        <div className="text__and__arrow flex w-full text-center items-center justify-end pr-5">
          <p className="pr-2">{slide.cta}</p>
          <ArrowForwardIosIcon fontSize='small' />
        </div>
      </div>


        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiper;
