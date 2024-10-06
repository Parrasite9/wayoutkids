import React from 'react';
import useIsMobile from '../hooks/ScreenSizeUpdate';
import ReactSwiper from '../Packages/ReactSwiper';


function Hero() {

  const isMobile = useIsMobile();


  return (
    <div className='Hero__Container'>
      {isMobile ? (
        <>
        {/* MOBILE VERSION  */}
        <div className="hero__text__and__cta flex flex-col">
          <h1 className='hero__text text-left text-4xl pt-5 font-bold'>Empowering The <br /> Next Generation</h1>
          <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md w-1/2'>Make An Impact</button>
        </div>

        // Component container in your Tailwind setup
        <div className="reactSwiper__container mt-10 border border-red-500 overflow-hidden relative">
          <ReactSwiper />
        </div>











        </>
      ) : (
        <>
        {/* DESKTOP VERSION  */}
        <div className="hero__text">
          <h1>Empowering the Next Generation</h1>
          {/* <div className="reactSwiper__container ">
            <ReactSwiper />
          </div>         */}
        </div>
        </>
      )}

    </div>
  );
}

export default Hero;
