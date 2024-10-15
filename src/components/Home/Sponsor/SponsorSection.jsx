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
          className="parent grid grid-cols-2 gap-0 p-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: '1fr',
            gridColumnGap: '0px',
            gridRowGap: '0px',
          }}
        >
          {/* First column with text */}
          <div className="div1 flex flex-col justify-center" style={{ gridArea: '1 / 1 / 2 / 2' }}>
                <h3 className='mt-10 text-vDeepBlue font-semibold'>We Love Our Sponsors</h3>
                <h2 className='font-bold text-darkGreen text-2xl mb-8'>Creating A Community That Makes A Difference</h2>
                <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui consequuntur saepe cumque illo fugit asperiores ipsam dolore! Culpa quidem quibusdam placeat hic, similique impedit adipisci illum laboriosam quas fugit maiores.</p>
            <div className="about__button justify-center items-center">
                <button className='bg-blue-500 text-white mt-5 px-4 py-2 rounded-md flex justify-center w-full
                                    md:w-2/5 md:py-3'>
                    <span className='leading-none'>Become A Sponsor</span> 
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
