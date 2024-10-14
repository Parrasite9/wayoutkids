import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WhyUsText = () => {
    return (
        <>
        <div className="grid grid-cols-3 grid-rows-2 gap-0 md:gap-y-8 ">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 div1 flex justify-center items-start">
                {/* Content for Div 1 */}
                <img className='w-2/3 md:w-1/3 lg:w-1/2' src="/images/icons/shield.png" alt="shield" />
            
            </div>
            <div className="col-start-2 col-end-4 row-start-1 row-end-2 div2">
                {/* Content for Div 2 */}
                <h3 className='font-semibold text-xl mb-4 lg:text-left'>Trusted by 1000+ Learners</h3>
                <p className='lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam libero dolore iste officiis? Quisquam, quibusdam.</p>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 div3 flex justify-center items-start">
                {/* Content for Div 3 */}
                <img className='w-1/2 md:w-1/4 lg:w-1/3' src="/images/icons/support.png" alt="support" />

            </div>
            <div className="col-start-2 col-end-4 row-start-2 row-end-3 div4">
                {/* Content for Div 4 */}
                <h3 className='font-semibold text-xl mb-4 lg:text-left'>Unlimited Resources With Strong Support</h3>
                <p className='lg:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nam dicta cupiditate impedit harum aliquam.</p>
            </div>
        </div>
        <button className='flex justify-center bg-vBrightOrange text-white px-4 py-3 mb-8 rounded-3xl mt-8 w-2/3 lg:w-2/5'>
            Discover More 
            <ArrowForwardIcon className='text-white ml-2' />
        </button>
        </>
    );
};

export default WhyUsText;
