import React from 'react';
import  useIsMobile from '../hooks/ScreenSizeUpdate';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const About = () => {

    const isMobile = useIsMobile();

  return (
    <div className='about__container'>
      {isMobile ? (
        <>

        <div className="about__text__container">
            <h3 className='mt-10 text-vDeepBlue font-semibold'>About Us</h3>
            <h2 className='font-bold text-darkGreen text-2xl mb-8'>Growing a Community of Learners for Life.</h2>
            <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa quidem quibusdam placeat hic, similique impedit adipisci illum laboriosam quas fugit maiores.</p>
        
            {/* TEXT AND FONT GRID  */}
            <div className="grid grid-cols-3 grid-rows-2 gap-0">
                {/* Parent div that spans all rows and columns */}
                {/* <div className="col-span-3 row-span-2 bg-gray-200">Parent div content</div> */}

                {/* Div2: Icon placed in first row, first column */}
                <div className="row-start-1 col-start-1 flex items-center justify-center">
                    <div className="bg-vBrightOrange rounded-full flex items-center justify-center w-16 h-16">
                        <MenuBookIcon className="text-white text-2xl" style={{ width: '30px', height: '30px' }} />
                    </div>
                </div>

                {/* Div3: Text placed in first row, second and third columns */}
                <div className="row-start-1 col-start-2 col-span-2 flex items-center">
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

                {/* Div5: Text placed in second row, second and third columns */}
                <div className="row-start-2 col-start-2 col-span-2 flex items-center">
                    <div className="about__icon__text p-5">
                        <h2 className='font-semibold mb-2'>Flexible Classes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium iure atque neque adipisci non.</p>
                    </div>
                </div>
            </div>

            <div className="about__button justify-center items-center">
                <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md w-1/2 flex justify-center w-full'>
                    <span className='leading-none'>Learn More</span> 
                    <ArrowForwardIosIcon fontSize='small'/>
                </button>
            </div>

        </div>

        <div className="about__button">
            <button></button>
        </div>

        <div className="img__container">
            <img className='w-full my-2' src="/images/image1.jpg" alt="" />
            <img className='w-full mb-2' src="/images/image2.jpeg" alt="" />
            <img className='w-full mb-2' src="/images/image3.jpg" alt="" />
        </div>


        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default About;