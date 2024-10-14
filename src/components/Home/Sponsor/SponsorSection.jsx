import React from 'react';
import Sponsor from './Sponsor'; // Import the Sponsor component
import useIsMobile from '../../hooks/ScreenSizeUpdate'; // Import the hook for detecting mobile screens
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SponsorSection = () => {
  const isMobile = useIsMobile(); // Detect if the screen is mobile

  return (
    <div className='bg-custom-gradient'>
      {/* Conditional rendering based on whether the screen is mobile */}
      {isMobile ? (
        <div>
          <Sponsor /> {/* Render just the Sponsor grid for mobile */}
        </div>
      ) : (
        <div
          className="parent grid grid-cols-2 gap-0"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: '1fr',
            gridColumnGap: '0px',
            gridRowGap: '0px',
          }}
        >
          {/* First column with text */}
          <div className="div1" style={{ gridArea: '1 / 1 / 2 / 2' }}>
            <h3 className="text-lg font-semibold">Our Trusted Partners</h3>
            <h2 className="text-2xl font-bold mb-4">We Value Our Sponsors</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula felis sed nulla tempor
              venenatis. Donec quis augue at lorem tincidunt commodo. Nulla facilisi.
            </p>
            <div className="about__button justify-center items-center">
                <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                                    md:w-2/5 md:py-3'>
                    <span className='leading-none'>Learn More</span> 
                    <ArrowForwardIosIcon fontSize='small'/>
                </button>
            </div>
          </div>

          {/* Second column with the Sponsor component */}
          <div className="div2" style={{ gridArea: '1 / 2 / 2 / 3' }}>
            <Sponsor /> {/* Render the Sponsor grid */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorSection;
