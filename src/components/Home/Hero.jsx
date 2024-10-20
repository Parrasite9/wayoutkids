import React, { useState } from 'react';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// THIS IMPORT PULLS SLIDES FROM THE REACT SWIPER FILE 
import ReactSwiper, { slides } from '../Packages/ReactSwiper';

// MUI ICONS 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import VideoModal from './VideoModal';

function Hero() {

  const isMobile = useIsMobile();
  const [isModalOpen, setModalOpen] = useState(false); // State to manage the modal

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div className='Hero__Container lg:px-8'>
      
      {/* HERO TEXT  */}
      {isMobile ? (
        <div className="hero__text__and__cta flex flex-col md:items-center">
          <h1 className='hero__text text-left text-[44px] pt-5 font-bold 
                          md:text-[60px] md:text-center
                          '>
                            Empowering The 
                            <br /> 
                            Next Generation
          </h1>
          <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md w-1/2'>Make An Impact</button>
        </div>

      ) : (
        <>
        <div className="hero__text__and__cta flex flex-col md:items-center pt-4">
            <h1 className='font-bold pt-5
                            md:text-center
                            lg:text-[50px]
                            xl:text-[60px]
                            '>
                            Empowering Future Leaders Through <br /> Education and Advocacy
            </h1>
            <h2 className='text-lg text-center pt-5 xl:text-2xl'>Together, we can inspire and equip the next <br /> generation to create lasting change.</h2>
        </div>


</>
      )}

      {/* HERO SLIDER  */}
      {isMobile ? (
        <div className="reactSwiper__container mt-10 overflow-hidden relative">
          <ReactSwiper />
        </div>
      ) : (
        // DESKTOP VERSION OF SLIDE CONTENT 
        <>
            <div className="grid grid-cols-10 grid-rows-5 gap-2 lg:-translate-y-12">
                {/* Div1 (Optional) */}
                <div className="col-start-1 col-end-11 row-start-1 row-end-6">
                {/* Optional content for Div1 */}
                </div>

                {/* Div2 to Div8 */}
                {slides.slice(0, 7).map((slide, index) => {
                    const divClasses = [
                        /* Define the classes for each div based on index */
                        "col-start-1 col-end-3 row-start-1 row-end-4",
                        "col-start-1 col-end-3 row-start-4 row-end-6",
                        "col-start-3 col-end-5 row-start-3 row-end-6",
                        "col-start-5 col-end-7 row-start-4 row-end-6",
                        "col-start-7 col-end-9 row-start-3 row-end-6",
                        "col-start-9 col-end-11 row-start-1 row-end-4",
                        "col-start-9 col-end-11 row-start-4 row-end-6",
                    ];

                // Check if it's the fifth slide (index 4)
                const imageClasses = index === 4 ? "transform scale-x-[-1]" : "";

                // Conditional background colors for slides without an image
                const backgroundColor = index === 1 ? 'bg-yellow-500' : index === 6 ? 'bg-orange-500' : '';

                // Centering styles for text-only and image-based slides
                const centeredText = 'flex flex-col items-center justify-center text-center';

                
                return (
                  <div key={index} className={`${divClasses[index]} relative cursor-pointer transition-transform duration-300 transform hover:-translate-y-2`}>
                      {/* Check if the slide has an image */}
                      {slide.src ? (
                          <img src={slide.src} alt={slide.alt} className={`w-full h-full object-cover rounded-3xl ${imageClasses}`} />
                      ) : (
                          // No image, render background with centered text
                          <div className={`w-full h-full rounded-3xl ${backgroundColor} ${centeredText}`}>
                              <div className="text-white">
                                  <h3 className="text-lg font-bold lg:text-3xl">{slide.title}</h3>
                                  {slide.cta && (
                                      <div className="mt-2">
                                          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{slide.cta}</button>
                                      </div>
                                  )}
                              </div>
                          </div>
                      )}
          
                      {/* If the slide has an image, render the text overlay, and center it for slide 4 */}
                      {slide.src && (
                          <div className={`absolute inset-0 ${index === 3 ? centeredText : 'flex flex-col justify-between'} text-white bg-black bg-opacity-40 py-5 rounded-3xl`}>
                              <h3 className="text-lg font-bold pl-5 lg:text-3xl">{slide.title}</h3>
                              <div className={`${index === 3 ? 'mt-4 flex items-center justify-center' : 'flex items-center justify-end pr-5'}`}>
                              {slide.cta && <p className="pr-2 text-xl">{slide.cta}</p>}
                                  {slide.cta && <ArrowForwardIosIcon fontSize="small" />}
                              </div>
                          </div>
                      )}
                  </div>
              );
              })}

                {/* Div9 (Buttons) */}
                <div className="col-start-3 col-end-9 row-start-1 row-end-3 flex items-center justify-around">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-2/5 xl:py-3">
                        Make An Impact
                    </button>
                    {/* <button className="flex justify-center bg-darkGreen text-white px-4 py-2 rounded-md w-2/5 xl:py-3"> */}
                    <button
                onClick={openModal}  
                className="flex justify-center bg-darkGreen text-white px-4 py-2 rounded-md w-2/5 xl:py-3"
              >
                        <PlayCircleOutlineIcon />
                        <span className="pl-2">Watch Video</span>
                    </button>
                </div>
            </div>
        </>
      )}

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  )
}

export default Hero;
