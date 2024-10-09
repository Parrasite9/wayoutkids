// src/components/utils/eventUtils.js

export const eventData = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        time: '8:30 am',
        date: '2025-01-01',
        location: 'Tacoma, WA',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        time: '8:30 am',
        date: '2026-05-26',
        location: 'Dallas, TX',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        time: '8:30 am',
        date: '2027-02-24',
        location: 'Orlando, FL',
    },
];


// Utility function to format date as "MMM DD, YYYY"
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: '2-digit', year: 'numeric' }; // "Jan 05, 2024"
    return date.toLocaleDateString('en-US', options);
};

// Function to get the next upcoming event
export const getNextEvent = (eventData) => {
    const currentDate = new Date();
    return eventData.find(event => new Date(event.date) >= currentDate);
};

// Function to get the next non-duplicate event
export const getNextNonDuplicateEvent = (eventData, displayedEvent) => {
    const currentDate = new Date();
    return eventData.find(event => 
        new Date(event.date) >= currentDate && event !== displayedEvent
    );
};

// Export the formatDate function for reuse
export { formatDate };

