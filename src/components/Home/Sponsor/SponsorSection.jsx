import React from 'react';
import Sponsor from './Sponsor'; // Import the Sponsor component
import useIsMobile from '../../hooks/ScreenSizeUpdate'; // Import the hook for detecting mobile screens

const SponsorSection = () => {
  const isMobile = useIsMobile(); // Detect if the screen is mobile

  return (
    <div>
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
