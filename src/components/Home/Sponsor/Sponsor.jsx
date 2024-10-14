import React from 'react';
import { sponsorData } from '../../Utils/SponsorUtil'; // Importing sponsor data from utils

const Sponsor = () => {
  
  const SponsorGrid = ({ sponsors }) => {
    return (
      <div
        className="grid gap-4 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4"
      >
        {sponsors.map((sponsor, index) => {
          const isLastItem = index === sponsors.length - 1;
          const itemsInLastRow = sponsors.length % 4; // Get how many items are in the last row

          // Determine dynamic classes based on the number of sponsors
          let gridClass = 'col-span-1';

          // If only one image in the last row, span across 4 columns
          if (isLastItem && itemsInLastRow === 1) {
            gridClass = 'lg:col-span-4';
          }
          // If there are 2 images in the last row, make each take up 2 columns
          else if (isLastItem && itemsInLastRow === 2) {
            gridClass = 'lg:col-span-2';
          }
          // If the current image is in the second-to-last position and there are 2 images in the last row
          else if (index === sponsors.length - 2 && itemsInLastRow === 2) {
            gridClass = 'lg:col-span-2';
          }

          return (
            <div key={index} className={`flex justify-center items-center ${gridClass}`}>
              <img src={sponsor.image} alt={`Sponsor ${index + 1}`} className="w-3/4 h-auto" />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 lg:hidden">Meet Our Sponsors</h2>
      <SponsorGrid sponsors={sponsorData} /> {/* Passing the sponsor data */}
    </div>
  );
};

export default Sponsor;
