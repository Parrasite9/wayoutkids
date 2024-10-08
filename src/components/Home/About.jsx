import React from 'react';
import  useIsMobile from '../hooks/ScreenSizeUpdate';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const About = () => {

    const isMobile = useIsMobile();

  return (
    <div className='about__container bg-custom-gradient'>
      {isMobile ? (
        <>

            <div className="about__text__container  px-4 py-4">
                <h3 className='mt-10 text-vDeepBlue font-semibold'>About Us</h3>
                <h2 className='font-bold text-darkGreen text-2xl mb-8'>Growing a Community of Learners for Life.</h2>
                <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa quidem quibusdam placeat hic, similique impedit adipisci illum laboriosam quas fugit maiores.</p>
            
                {/* TEXT AND FONT GRID  */}
                <div className="grid grid-cols-5 grid-rows-2 gap-0">
                    {/* Div1: Parent div that spans all rows and columns */}
                    {/* <div className="col-start-1 col-end-6 row-start-1 row-end-3">
                        Parent div content
                    </div> */}

                    {/* Div2: Icon placed in first row, first column */}
                    <div className="row-start-1 col-start-1 flex items-center justify-center">
                        <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                            <MenuBookIcon className="text-white text-2xl" style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>

                    {/* Div3: Text placed in first row, second to fifth columns */}
                    <div className="row-start-1 col-start-2 col-end-6 flex items-center">
                        <div className="about__icon__text p-5">
                            <h2 className='font-semibold mb-2'>Flexible Classes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium iure atque neque adipisci non.</p>
                        </div>
                    </div>

                    {/* Div4: Icon placed in second row, first column */}
                    <div className="row-start-2 col-start-1 rounded-full flex items-center justify-center">
                        <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                            <SupportAgentIcon className="text-white" style={{ width: '35px', height: '35px' }} />
                        </div>
                    </div>

                    {/* Div5: Text placed in second row, second to fifth columns */}
                    <div className="row-start-2 col-start-2 col-end-6 flex items-center">
                        <div className="about__icon__text p-5">
                            <h2 className='font-semibold mb-2'>Educator Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium iure atque neque adipisci non.</p>
                        </div>
                    </div>
                </div>


                <div className="about__button justify-center items-center">
                    <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                                        md:w-2/5 md:py-3'>
                        <span className='leading-none'>Learn More</span> 
                        <ArrowForwardIosIcon fontSize='small'/>
                    </button>
                </div>

            </div>

            {/* <div className="about__button">
                <button></button>
            </div> */}

            {/* <div className="img__container">
                <img className='w-full my-2' src="/images/image1.jpg" alt="" />
                <img className='w-full mb-2' src="/images/image2.jpeg" alt="" />
                <img className='w-full mb-2' src="/images/image3.jpg" alt="" />
            </div> */}

            <div className="grid grid-cols-1 gap-0 bg-custom-gradient py-12 md:grid-cols-4 md:grid-rows-7 md:gap-2">
                {/* Div1: First image spanning multiple rows/columns on md */}
                <div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5">
                    <img className="w-full h-full object-cover my-2" src="/images/about1.jpg" alt="Image 1" />
                </div>

                {/* Div2: Second image spanning multiple rows/columns on md */}
                <div className="md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3">
                    <img className="w-full h-full object-cover mb-2" src="/images/about2.jpeg" alt="Image 2" />
                </div>

                {/* Div3: Third image spanning multiple rows/columns on md */}
                <div className="md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5">
                    <img className="w-full h-full object-cover mb-2" src="/images/about3.avif" alt="Image 3" />
                </div>
            </div>

        </>
      ) : (
        <>
            {/* DESKTOP VIEW  */}
            <div class="grid grid-cols-2 grid-rows-1 gap-0 bg-custom-gradient lg:px-8 lg:py-10">
                {/* <!-- IMAGE CONTAINER--> */}
                <div class="col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center items-center">
                    {/* <!-- Centered Grid for Images --> */}
                    <div class="grid lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
                        {/* <!-- Div1: Covers grid area 4 / 3 / 7 / 8 --> */}
                        <div class="lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7">
                            <img class="w-full h-full object-cover" src="/images/about1.jpg" alt="About Image 1" />
                        </div>

                        {/* <!-- Div2: Covers grid area 2 / 2 / 4 / 5 --> */}
                        <div class="lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
                            <img class="w-full h-full object-cover" src="/images/about2.jpeg" alt="About Image 2" />
                        </div>

                        {/* <!-- Div3: Covers grid area 1 / 5 / 4 / 9 --> */}
                        <div class="lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4">
                            <img class="w-full h-full object-cover" src="/images/about3.avif" alt="About Image 3" />
                        </div>
                    </div>
                </div>

                {/* <!-- TEXT CONTAINER --> */}
                <div class="col-start-2 col-end-3 row-start-1 row-end-2">
                    {/* <!-- Content for Div2 --> */}
                    <div className="about__text__container">
                        <h3 className='mt-10 text-vDeepBlue font-semibold xl:text-xl'>About Us</h3>
                        <h2 className='font-bold text-darkGreen text-2xl mb-8 xl:text-3xl'>Growing a Community of Learners for Life.</h2>
                        <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa quidem quibusdam placeat hic, similique impedit adipisci illum laboriosam quas fugit maiores.</p>
                    
                        {/* TEXT AND FONT GRID  */}
                        <div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
                            {/* Div1: Parent div that spans all rows and columns */}
                            {/* <div className="col-start-1 col-end-6 row-start-1 row-end-3">
                                Parent div content
                            </div> */}

                            {/* Div2: Icon placed in first row, first column */}
                            <div className="row-start-1 col-start-1 flex items-center justify-center">
                                <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                                    <MenuBookIcon className="text-white text-2xl" style={{ width: '30px', height: '30px' }} />
                                </div>
                            </div>

                            {/* Div3: Text placed in first row, second to fifth columns */}
                            <div className="row-start-1 col-start-2 col-end-6 flex items-center">
                                <div className="about__icon__text p-5">
                                    <h2 className='font-semibold mb-2'>Flexible Classes</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium iure atque neque adipisci non.</p>
                                </div>
                            </div>

                            {/* Div4: Icon placed in second row, first column */}
                            <div className="row-start-2 col-start-1 rounded-full flex items-center justify-center">
                                <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                                    <SupportAgentIcon className="text-white" style={{ width: '35px', height: '35px' }} />
                                </div>
                            </div>

                            {/* Div5: Text placed in second row, second to fifth columns */}
                            <div className="row-start-2 col-start-2 col-end-6 flex items-center">
                                <div className="about__icon__text p-5">
                                    <h2 className='font-semibold mb-2'>Educator Support</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium iure atque neque adipisci non.</p>
                                </div>
                            </div>
                        </div>


                        <div className="about__button justify-center items-center mb-5">
                            <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                                                md:w-2/5 md:py-3'>
                                <span className='leading-none'>Learn More</span> 
                                <ArrowForwardIosIcon fontSize='small'/>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

        </>
      )}
    </div>
  );
};

export default About;