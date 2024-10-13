import React from 'react';

const WhyUsText = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-0 pb-8">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 div1 flex justify-center items-start">
                {/* Content for Div 1 */}
                <img className='w-2/3' src="/images/icons/shield.svg" alt="shield" />
            </div>
            <div className="col-start-2 col-end-4 row-start-1 row-end-2 div2">
                {/* Content for Div 2 */}
                <h3 className='font-semibold text-xl mb-4'>Trusted by 1000+ Learners</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam libero dolore iste officiis? Quisquam, quibusdam.</p>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 div3 flex justify-center items-start">
                {/* Content for Div 3 */}
                <img className='w-1/2' src="/images/icons/support.svg" alt="support" />
            </div>
            <div className="col-start-2 col-end-4 row-start-2 row-end-3 div4">
                {/* Content for Div 4 */}
                <h3 className='font-semibold text-xl mb-4'>Unlimited Resources With Strong Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nam dicta cupiditate impedit harum aliquam.</p>
            </div>
        </div>
    );
};

export default WhyUsText;
