// THIS IS THE ACTUAL EVENTS PAGE, NOT WHAT IS DISPLAYED ON THE HOME PAGE

import React from 'react';
import useIsMobile from '../components/hooks/ScreenSizeUpdate';

import { getNextEvent, getNextNonDuplicateEvent, formatDate } from '../components/Utils/EventUtil';
import { eventData } from '../components/Utils/EventUtil';

// export const eventData = [
//     {
//         id: 1,
//         title: 'Lorem ipsum dolor sit amet.',
//         description: 'Description 1',
//         date: '2021-01-01',
//         location: 'Location 1',
//     },
//     {
//         id: 2,
//         title: 'Event 1',
//         description: 'Lorem ipsum dolor sit amet consectetur.',
//         date: '2021-01-01',
//         location: 'Location 1',
//     },
//     {
//         id: 3,
//         title: 'Lorem ipsum dolor sit amet.',
//         description: 'Description 1',
//         date: '2021-01-01',
//         location: 'Location 1',
//     },
// ];



const Events = () => {
    const nextEvent = getNextEvent(eventData);
    const nextNonDuplicateEvent = getNextNonDuplicateEvent(eventData, nextEvent);
  
    return (
      <div>
        <h1>Upcoming Events</h1>
        <div>
          <h2>Next Event: {nextEvent.title}</h2>
          <p>Date: {formatDate(nextEvent.date)}</p>
          <p>Location: {nextEvent.location}</p>
        </div>
  
        <div>
          <h2>Following Event: {nextNonDuplicateEvent.title}</h2>
          <p>Date: {formatDate(nextNonDuplicateEvent.date)}</p>
          <p>Location: {nextNonDuplicateEvent.location}</p>
        </div>
      </div>
    );
  };

export default Events;

