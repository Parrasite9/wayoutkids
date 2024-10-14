import React from 'react';
import { chooseUsData } from '../../Utils/ChooseUsUtil';
import WhyUsText from './WhyUsText';
import useIsMobile from '../../hooks/ScreenSizeUpdate';

const WhyUsCards = () => {

    const isMobile = useIsMobile();

    return (
        <>
        {isMobile ? (
            <>
                <div className="parent grid grid-cols-1 grid-rows-4 gap-0 text-center justify-center mt-4 
                                    md:grid-cols-2 md:grid-rows-2 md:mx-8">
                    {chooseUsData.map((item, index) => (
                        <div
                        key={item.id}
                        className={`card__item mb-8 shadow-xl w-1/2 mx-auto p-4  ${
                            index === 0
                            ? 'col-start-1 row-start-1 md:col-start-1 md:row-start-1'
                            : index === 1
                            ? 'col-start-1 row-start-2 md:col-start-2 md:row-start-1'
                            : index === 2
                            ? 'col-start-1 row-start-3 md:col-start-1 md:row-start-2'
                            : 'col-start-1 row-start-4 md:col-start-2 md:row-start-2'
                        }`}
                        >
                            <img className='w-1/2 mx-auto mb-4 md:w-1/4' src={item.icon} alt={item.title} />
                            <h3 className='font-bold text-4xl mb-1'>{item.amount}</h3>
                            <p className='text-sm'>{item.title}</p>
                        </div>
                    ))}
                </div>
    
                <h3 className='text-vDeepBlue font-semibold'>Why Choose</h3>
                <h2 className='font-bold text-darkGreen text-2xl mb-8'>Creating a Community of Learners for Life</h2>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam illo blanditiis necessitatibus aut ad esse exercitationem reprehenderit consequatur saepe accusamus.</p>
                <WhyUsText />
            </>
        ) : (
            <>
                <div className="outer-parent">
                    {/* New Grid for Tablet and Above */}
                    <div className="parent grid grid-cols-1 grid-rows-4 gap-0 text-center justify-center mt-4 md:grid-cols-2 md:grid-rows-1">
                        {/* Inner Content Grid */}
                        <div className="child-grid grid grid-cols-1 grid-rows-4 gap-0 text-center justify-center mt-4 md:grid-cols-2 md:grid-rows-2">
                            {chooseUsData.map((item, index) => (
                                <div
                                key={item.id}
                                className={`card__item mb-8 shadow-xl w-1/2 mx-auto p-4 lg:flex lg:flex-col lg:items-center lg:justify-center ${
                                    index === 0
                                    ? 'col-start-1 row-start-1 md:col-start-1 md:row-start-1'
                                    : index === 1
                                    ? 'col-start-1 row-start-2 md:col-start-2 md:row-start-1'
                                    : index === 2
                                    ? 'col-start-1 row-start-3 md:col-start-1 md:row-start-2'
                                    : 'col-start-1 row-start-4 md:col-start-2 md:row-start-2'
                                }`}
                                >
                                    <img className='w-1/2 mx-auto mb-4' src={item.icon} alt={item.title} />
                                    <h3 className='font-bold text-4xl mb-1'>{item.amount}</h3>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Conditional rendering of WhyUsText */}
                        <div className="hidden md:block md:col-start-2 md:row-start-1">
                            <h3 className='text-left text-vDeepBlue font-semibold'>Why Choose</h3>
                            <h2 className='text-left font-bold text-darkGreen text-2xl mb-8'>Creating a Community of Learners for Life</h2>
                            <p className='text-left mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam illo blanditiis necessitatibus aut ad esse exercitationem reprehenderit consequatur saepe accusamus.</p>
                            <WhyUsText />
                        </div>
                    </div>

                    {/* Render WhyUsText separately for mobile */}
                    <div className="md:hidden">
                        <h3 className='text-vDeepBlue font-semibold'>Why Choose</h3>
                        <h2 className='font-bold text-darkGreen text-2xl mb-8'>Creating a Community of Learners for Life</h2>
                        <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam illo blanditiis necessitatibus aut ad esse exercitationem reprehenderit consequatur saepe accusamus.</p>
                        <WhyUsText />
                    </div>
                </div>

            </>
        )}

        </>
    );
};

export default WhyUsCards;