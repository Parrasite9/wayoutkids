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
                    <h1>Events</h1>
                </div>
            ) : (
                // DESKTOP VIEW 
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    {/* <!-- Div 1 --> */}
                    <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                        {/* <!-- Content for Div1 --> */}
                        <div className="title__and__linebreak">
                            <h3>Upcoming Events</h3>
                            {/* INSERT LINE BREAK  */}
                        </div>
                        
                        <h2>Ready To Join Our Latest Upcoming <span>Events?</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id beatae possimus alias architecto eaque numquam nemo dolorem tempore eum unde, quia tempora corporis quis repudiandae.</p>

                    </div>

                    {/* <!-- Div 2 --> */}
                    <div class="col-start-2 col-end-3 row-start-1 row-end-2">
                        {/* <!-- Content for Div2 --> */}

                        {/* THIS IS THE PARENT DIV FOR THE EVENTS SECTION CONTAINER  */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
                            {/* Div1: Spans the entire first row */}
                            <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-gray-200">
                                {/* Content for Div1 */}
                                Div 1 Content
                            </div>

                            {/* Div2: Spans the entire second row */}
                            <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-gray-300">
                                {/* Content for Div2 */}
                                Div 2 Content
                            </div>

                            {/* Div3: First image in first column, first row */}
                            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                <img className="w-full h-full object-cover" src="/images/events/paint.jpg" alt="Image 1" />
                            </div>

                            {/* Div4: Second column, first row */}
                            <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-gray-400 flex items-start justify-start text-left p-5">
                                {/* Content for Div4 */}
                                {nextEvent ? (
                                    <div>
                                        <div className="location__and__time flex mb-4 pt-4">
                                            <div className="time flex items-center">
                                                <AccessTimeIcon />
                                                <p className="pl-2">{nextEvent.time}</p>
                                            </div>
                                            <div className="location flex items-center ml-4">
                                                <LocationOnIcon />
                                                <p className="pl-2">{nextEvent.location}</p>
                                            </div>
                                        </div>
                                        <h3 className="font-bold mb-4 text-2xl">{nextEvent.title}</h3>
                                        <button className='border-none bg-transparent'>View More <ArrowForwardIcon /></button>
                                    </div>
                                ) : (
                                    <div>No upcoming events</div>  // Fallback if no event is found
                                )}
                            </div>


                            {/* Div5: Second image in the second row, first column */}
                            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                                <img className="w-full h-full object-cover" src="/images/events/jenga.jpg" alt="Image 2" />
                            </div>

                            {/* Only render event details if nextEvent exists */}
                            {/* Div6: Second column, second row */}
                            <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-gray-500 flex items-start justify-start">
                                <div className="bg-gray-400 w-full h-full flex items-start justify-start text-left p-5">
                                    {nextNonDuplicateEvent ? (
                                        <div>
                                            <div className="location__and__time flex mb-4">
                                                <div className="time flex items-center">
                                                    <AccessTimeIcon />
                                                    <p className="pl-2">{nextNonDuplicateEvent.time}</p>
                                                </div>
                                                <div className="location flex items-center ml-4">
                                                    <LocationOnIcon />
                                                    <p className="pl-2">{nextNonDuplicateEvent.location}</p>
                                                </div>
                                            </div>
                                            <h3 className="font-bold mb-4 text-2xl">{nextNonDuplicateEvent.title}</h3>
                                            <button className='border-none bg-transparent'>View More <ArrowForwardIcon /></button>
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