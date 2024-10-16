// THIS IS FOR THE HOME PAGE NOT THE ACTUAL EVENT PAGE ITSELF 

import React from 'react';
import useIsMobile from '../hooks/ScreenSizeUpdate';
import { eventData, getNextEvent, getNextNonDuplicateEvent, formatDate } from '../Utils/EventUtil';

// MUI ICONS 
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function EventSection() {

    const nextEvent = getNextEvent(eventData);
    const nextNonDuplicateEvent = getNextNonDuplicateEvent(eventData, nextEvent);

    const isMobile = useIsMobile();

    return (
        <div className='EventSection__Container__HomePage'>
            {isMobile ? (
                // MOBILE VIEW 
                <div>

                    {/* TITLE  */}
                    <div className="title__and__linebreak">
                        <h3 className='text-vBrightOrange mt-4'>Upcoming Events</h3>
                        {/* INSERT LINE BREAK  */}
                        <hr className="w-1/6 border-t-2 border-gray-400 my-4 text-left border-vDarkGreen" />
                    </div>


                    {/* TEXT  */}
                    <div className="flex flex-col justify-between
                                    md:pr-8">
                        <h2 className='text-4xl font-bold mt-2 md:mt-8'>Ready To Join Our Latest Upcoming <span className='text-vBrightOrange'>Events?</span></h2>
                        <p className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id beatae possimus alias architecto eaque numquam nemo dolorem tempore eum unde, quia tempora corporis quis repudiandae.</p>
                        <button className='flex justify-center bg-vBrightOrange text-white px-4 py-3 mb-8 rounded-3xl mt-8 w-2/3'>Discover More <ArrowForwardIcon className='text-white ml-2' /></button>
                    </div>  

                    <div className="md:grid grid-cols-2 gap-0 h-full mb-4">
                        {/* Div3: First image in the first column */}
                        <div className="h-full">
                            <img className="w-full h-full object-cover rounded-t-xl md:rounded-b-xl" src="/images/events/paint.jpg" alt="Image 1" />
                        </div>

                        {/* Event Data in the second column */}
                        {nextEvent ? (
                            <div className="relative bg-softOrange p-5 flex flex-col items-start justify-start text-left mb-8 rounded-b-xl h-full   
                                                md:rounded-t-xl">
                                {/* Event Data */}
                                <div>
                                    <div className="location__and__time flex mb-4 pt-5 text-xs">
                                        <div className="time flex items-center">
                                            <AccessTimeIcon className='text-vBrightOrange' />
                                            <p className="pl-2 text-sm">{nextEvent.time}</p>
                                        </div>
                                        <div className="location flex items-center ml-4">
                                            <LocationOnIcon className='text-vBrightOrange' />
                                            <p className="pl-2 text-sm">{nextEvent.location}</p>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-4 text-2xl">{nextEvent.title}</h3>
                                    <button className='border-none bg-transparent cursor-pointer'>
                                        View More <ArrowForwardIcon className='text-vBrightOrange' />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>No upcoming events</div> // Fallback if no event is found
                        )}
                    </div>

                    <div className="md:grid grid-cols-2 gap-0 h-full mb-4">

                        {/* Div5: Second image in the second row, first column */}
                        <div className="h-full">
                            <img className="w-full h-full object-cover rounded-t-xl md:rounded-b-xl" src="/images/events/jenga.jpg" alt="Image 2" />
                        </div>


                        <div className="bg-softGreen w-full h-full flex items-start justify-start text-left p-5 mb-8 rounded-b-xl
                         md:rounded-t-xl">
                            {nextNonDuplicateEvent ? (
                                <div className="relative bg-softDarkGreen pt-5 flex items-start justify-start text-left
                                                 md:rounded-t-xl">
                                {/* XYZ attached to the event, visible only on screens 1440px and above */}
                                <div className="hidden xl:block bg-vDarkGreen px-8 py-2 rounded-full absolute right-[-6rem] top-1/2 transform -translate-y-1/2 -rotate-90 text-md font-bold text-white">
                                    {formatDate(nextNonDuplicateEvent.date)}
                                </div>
                                
                                {/* Event Data */}

                                <div>
                                    <div className="location__and__time flex mb-4 pt-5 text-xs">
                                        <div className="time flex items-center">
                                            <AccessTimeIcon className='text-vDarkGreen' />
                                            <p className="pl-2 text-sm">{nextNonDuplicateEvent.time}</p>
                                        </div>
                                        <div className="location flex items-center ml-4">
                                            <LocationOnIcon className='text-vDarkGreen' />
                                            <p className="pl-2 text-sm">{nextNonDuplicateEvent.location}</p>
                                        </div>
                                    </div>
                                    <h3 className="font-bold mb-4 text-2xl">{nextNonDuplicateEvent.title}</h3>
                                    <button className='border-none bg-transparent cursor-pointer'>View More <ArrowForwardIcon className='text-vDarkGreen' /></button>
                                </div>
                                </div>


                            ) : (
                                <div>No upcoming events</div>  // Fallback if no event is found
                            )}
                        </div>
                    </div>






                </div>
            ) : (
                // DESKTOP VIEW 
                <div className="grid grid-cols-2 auto-rows-auto gap-4 p-8">
                    {/* <!-- Div 1 --> */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-auto">
                        {/* <!-- Content for Div1 --> */}
                        <div className="title__and__linebreak">
                            <h3 className='text-vBrightOrange'>Upcoming Events</h3>
                            {/* INSERT LINE BREAK  */}
                            <hr className="w-1/6 border-t-2 border-gray-400 my-4 text-left border-vDarkGreen" />

                        </div>
                        
                        <div className="flex flex-col justify-between">
                            <h2 className='text-4xl font-bold mt-8'>Ready To Join Our Latest Upcoming <span className='text-vBrightOrange'>Events?</span></h2>
                            <p className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id beatae possimus alias architecto eaque numquam nemo dolorem tempore eum unde, quia tempora corporis quis repudiandae.</p>
                            <button className='flex justify-center bg-vBrightOrange text-white px-4 py-3 rounded-3xl mt-8 w-2/5'>Discover More <ArrowForwardIcon className='text-white ml-2' /></button>
                        </div>                    
                    </div>

                    {/* <!-- Div 2 --> */}
                    <div className="col-start-2 col-end-3 row-start-1 row-end-2 rounded-l-xl">
                        {/* <!-- Content for Div2 --> */}

                        {/* THIS IS THE PARENT DIV FOR THE EVENTS SECTION CONTAINER  */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
                            {/* Div1: Spans the entire first row */}
                            <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-gray-200 rounded-l-xl rounded-r-xl">
                                {/* Content for Div1 */}
                                Div 1 Content
                            </div>

                            {/* Div2: Spans the entire second row */}
                            <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-gray-300 rounded-l-xl rounded-r-xl">
                                {/* Content for Div2 */}
                                Div 2 Content
                            </div>

                            {/* Div3: First image in first column, first row */}
                            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                <img className="w-full h-full object-cover rounded-l-xl" src="/images/events/paint.jpg" alt="Image 1" />
                            </div>

                            {/* Div4: Second column, first row */}
                            <div className="col-start-2 col-end-3 row-start-1 row-end-auto bg-softOrange flex items-start justify-start text-left p-5 rounded-r-xl">
                                {/* Content for Div4 */}
                                {nextEvent ? (
                                    <div className="relative bg-softOrange p-5 flex items-start justify-start text-left rounded-r-xl">
                                        {/* XYZ attached to the event */}
                                        <div className="hidden xl:block bg-vBrightOrange px-8 py-2 rounded-full absolute right-[-6rem] top-1/2 transform -translate-y-1/2 -rotate-90 text-md font-bold text-white">
                                            {formatDate(nextEvent.date)}
                                        </div>

                                        {/* Event Data */}
                                        <div>
                                            <div className="location__and__time flex mb-4 pt-5 text-xs">
                                                <div className="time flex items-center">
                                                    <AccessTimeIcon className='text-vBrightOrange' />
                                                    <p className="pl-2">{nextEvent.time}</p>
                                                </div>
                                                <div className="location flex items-center ml-4">
                                                    <LocationOnIcon className='text-vBrightOrange' />
                                                    <p className="pl-2">{nextEvent.location}</p>
                                                </div>
                                            </div>
                                            <h3 className="font-bold mb-4 text-2xl">{nextEvent.title}</h3>
                                            <button className='border-none bg-transparent cursor-pointer'>
                                            View More <ArrowForwardIcon className='text-vBrightOrange' />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>No upcoming events</div>  // Fallback if no event is found
                                )}
                            </div>


                            {/* Div5: Second image in the second row, first column */}
                            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                                <img className="w-full h-full object-cover rounded-l-xl" src="/images/events/jenga.jpg" alt="Image 2" />
                            </div>

                            {/* Only render event details if nextEvent exists */}
                            {/* Div6: Second column, second row */}
                            <div className="col-start-2 col-end-3 row-start-2 row-end-auto bg-gray-500 flex items-start justify-start rounded-r-xl">
                                <div className="bg-softGreen w-full h-full flex items-start justify-start text-left p-5 rounded-r-xl">
                                    {nextNonDuplicateEvent ? (
                                        <div className="relative bg-softDarkGreen p-5 flex items-start justify-start text-left">
                                        {/* XYZ attached to the event, visible only on screens 1440px and above */}
                                        <div className="hidden xl:block bg-vDarkGreen px-8 py-2 rounded-full absolute right-[-6rem] top-1/2 transform -translate-y-1/2 -rotate-90 text-md font-bold text-white">
                                            {formatDate(nextNonDuplicateEvent.date)}
                                        </div>
                                      
                                        {/* Event Data */}

                                        <div>
                                            <div className="location__and__time flex mb-4 pt-5 text-xs">
                                                <div className="time flex items-center">
                                                    <AccessTimeIcon className='text-vDarkGreen' />
                                                    <p className="pl-2">{nextNonDuplicateEvent.time}</p>
                                                </div>
                                                <div className="location flex items-center ml-4">
                                                    <LocationOnIcon className='text-vDarkGreen' />
                                                    <p className="pl-2">{nextNonDuplicateEvent.location}</p>
                                                </div>
                                            </div>
                                            <h3 className="font-bold mb-4 text-2xl">{nextNonDuplicateEvent.title}</h3>
                                            <button className='border-none bg-transparent cursor-pointer'>View More <ArrowForwardIcon className='text-vDarkGreen' /></button>
                                        </div>
                                      </div>


                                    ) : (
                                        <div>No upcoming events</div>  // Fallback if no event is found
                                    )}
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            )}
        </div>
    );
}

export default EventSection;