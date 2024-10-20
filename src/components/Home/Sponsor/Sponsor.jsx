import React from 'react';
import { sponsorData } from '../../Utils/SponsorUtil'; // Importing sponsor data from utils
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForward';

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
    <div className='p-4'>
        {/* <h3 className='mt-10 text-vDeepBlue font-semibold'>We Love Our Sponsors</h3>
        <h2 className='font-bold text-darkGreen text-2xl mb-8'>Creating A Community That Makes A Difference</h2>
        <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa quidem quibusdam placeat hic, similique impedit adipisci illum laboriosam quas fugit maiores.</p>
        <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full mb-8
                            md:w-2/5 md:py-3'>
            <span className='leading-none'>Become A Sponsor</span> 
            <ArrowForwardIosIcon fontSize='small'/>
        </button> */}

        <SponsorGrid sponsors={sponsorData} /> {/* Passing the sponsor data */}
    </div>
  );
};

export default Sponsor;
