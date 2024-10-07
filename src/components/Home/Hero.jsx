import React from 'react';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// THIS IMPORT PULLS SLIDES FROM THE REACT SWIPER FILE 
import ReactSwiper, { slides } from '../Packages/ReactSwiper';

// MUI ICONS 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Hero() {

  const isMobile = useIsMobile();

  return (
    <div className='Hero__Container'>
      
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
        <div className="hero__text__and__cta flex flex-col md:items-center lg:translate-y-5">
            <h1 className='font-bold pt-5
                            md:text-center
                            lg:text-[50px] '>
                            Empowering Future Leaders Through Education and Advocacy
            </h1>
            <h2 className='text-lg text-center pt-5'>Together, we can inspire and equip the next <br /> generation to create lasting change.</h2>
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
            <div className="grid grid-cols-10 grid-rows-5 gap-2">
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
                
                return (
                    <div key={index} className={`${divClasses[index]} relative `}>
                        <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover rounded-3xl" />
                        <div className="absolute inset-0 flex flex-col justify-between text-white bg-black bg-opacity-40 py-5 rounded-3xl">
                            <h3 className="text-lg font-bold pl-5">{slide.title}</h3>
                            <div className="flex items-center justify-end pr-5">
                            <p className="pr-2">{slide.cta}</p>
                            <ArrowForwardIosIcon fontSize="small" />
                            </div>
                        </div>
                    </div>
                );
                })}

                {/* Div9 (Buttons) */}
                <div className="col-start-4 col-end-8 row-start-1 row-end-3 flex items-center justify-around">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-2/5">
                        Make An Impact
                    </button>
                    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md w-2/5">
                        <PlayCircleOutlineIcon />
                        <span className="pl-2">Watch Video</span>
                    </button>
                </div>
            </div>
        </>
      )}

    </div>
  )
}

export default Hero;
