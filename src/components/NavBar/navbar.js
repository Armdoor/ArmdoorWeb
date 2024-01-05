import React, { useState } from 'react';
import './navbar.css';
import logo from './logom.png';
//import contact from './con.png';
import { Link } from 'react-scroll';
import menu from './menu.png';

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);

  const handleMenuButtonClick = () => {
    // Handle menu button click logic here
    // For example, you can toggle a modal or show/hide the tabbar
  };

  // Update the visibility of the menu button based on screen width
  const updateVisibility = () => {
    if (window.innerWidth <= 640) {
      setShowMenuButton(true);
    } else {
      setShowMenuButton(false);
    }
  };

  // Add event listener to update visibility on window resize
  window.addEventListener('resize', updateVisibility);

  // Call the updateVisibility function when the component mounts
  React.useEffect(() => {
    updateVisibility();
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className={`desktopMenu ${showMenuButton ? 'hidden' : ''}`}>
        <Link activeClass='active' to='introMain' spy={true} smooth={true} offset={-100} duration={500} className='listItem'>
          Home
        </Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} className='listItem'>
          About
        </Link>
        <Link activeClass='active' to='workmain' spy={true} smooth={true} offset={-100} className='listItem'>
          Portfolio
        </Link>
      </div>
      {showMenuButton && (
        <button className='menu' onClick={handleMenuButtonClick}>
          <img src={menu} alt='' className='mImg' />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
