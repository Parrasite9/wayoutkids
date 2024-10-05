import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/ScreenSizeUpdate';

// MOBILE IMPORTS 
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Define your navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  {
    name: 'Programs',
    path: '/programs',
    subLinks: [
      { name: 'Be Aware', path: '/programs/be-aware' },
      { name: 'Clean Record', path: '/programs/clean-record' },
      { name: 'Daycare Fundraiser', path: '/programs/daycare-fundraiser' },
      { name: 'Digital Steam', path: '/programs/digital-steam' },
      { name: 'Go Green', path: '/programs/go-green' },
      { name: 'I Like To Read', path: '/programs/i-like-to-read' },
      { name: 'Power Words', path: '/programs/power-words' },
      { name: 'Summer Camp', path: '/programs/summer-camp' },
      // Add more program links as needed
    ],
  },
  { name: 'TV Show', path: '/tv-show' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
 
  // Add more main navigation links as needed
];

function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExitDisplayed, setIsExitDisplayed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    if (isMobile) {
      setActiveSubMenu(activeSubMenu === index ? null : index);
    }
  };

  const renderNavLinks = (links) => (
    <ul className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-6 items-center'}`}>
      {links.map((link, index) => (
        <li 
          key={link.path} 
          className="relative group py-2 md:py-0"
          onMouseEnter={() => !isMobile && link.subLinks && setActiveSubMenu(index)}
          onMouseLeave={() => !isMobile && link.subLinks && setActiveSubMenu(null)}
        >
          {/* Main Link */}
          <Link 
            to={link.path} 
            onClick={() => isMobile && link.subLinks ? handleSubMenuToggle(index) : null}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            {link.name}
          </Link>
  
          {/* Sub-menu (only shown for items with sub-links) */}
          {link.subLinks && (
            <>
              {isMobile && activeSubMenu === index && (
                // Mobile view: toggle sub-menu on click
                <ul className="space-y-2 bg-gray-50 p-2 rounded-lg shadow-lg">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.path}>
                      <Link 
                        to={subLink.path} 
                        className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
  
              {!isMobile && activeSubMenu === index && (
                // Desktop view: show sub-menu on hover
                <ul className="absolute left-0 top-full bg-white border border-gray-200 rounded-lg shadow-lg space-y-1 p-2 z-50">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.path}>
                      <Link 
                        to={subLink.path} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExit = () => {
    setIsExitDisplayed(!isExitDisplayed);
  };

  const toggleSubMenu = () => {
    setActiveSubMenu(!activeSubMenu);
  };
  

  return (
    <div className="bg-white shadow-md">
      {isMobile ? (
        // MOBILE CONTAINER 
        <div className='nav__mobile-container p-4 flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <img src="images/logo.png" alt="Logo" className="h-8 w-auto" />
            {/* Add a mobile menu toggle button here if needed */}
          </div>

          {/* MOBILE MENU TOGGLE BUTTON  */}
          {isMenuOpen ? (
            <>
              <ClearIcon onClick={toggleMenu} />
              
              <nav className='mt-4'>
                {renderNavLinks(navLinks)}
              </nav>

              <div className='donate__button-container border-yellow-600 border-2'>
                <button className='bg-blue-600 text-white px-8 py-2 rounded-md'>Donate</button>
              </div>
            </>
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}


        </div>
      ) : (
        // DESKTOP CONTAINER 
        <div className='nav__desktop-container mx-auto px-4 border border-red-600 border-2'>
          <nav className="flex items-center py-4 justify-between">
            
            {/* LOGO CONTAINER  */}
            <div className="logo__container border-blue-600 border-2 ">
              <img src="images/logo.png" alt="Logo" className="h-8 w-auto h-10" />
            </div>

            {/* NAV LINKS CONTAINER  */}
            <div className='navlinks__container border-green-600 border-2 flex justify-center items-center'>
              {renderNavLinks(navLinks)}
            </div>

            {/* DONATE BUTTON CONTAINER  */}
            <div className='donate__button-container border-yellow-600 border-2'>
              <button className='bg-blue-600 text-white px-8 py-2 rounded-md'>Donate</button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
