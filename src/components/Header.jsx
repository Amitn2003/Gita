import React, { useState, useContext } from 'react';
import { SanskritContext } from '../context/SanskritContext';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/gitaicon.png';


const Header = () => {

  // <nav className="p-4 bg-amber-600 shadow-md flex justify-between items-center">
  //   <Link to="/" className="text-white text-2xl font-bold">
  //   <img src={LogoImage} alt="Gita logo" className='h-10 w-10 inline m-1'  />
  //     My Gita
  //   </Link>
  //   <button
  //     onClick={toggleSanskrit}
  //     className="px-4 py-2 bg-white text-amber-600 font-semibold rounded shadow hover:bg-gray-100 transition"
  //   >
  //     {isSanskrit ? 'Show Translated' : 'Show Sanskrit'}
  //   </button>
  // </nav>
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 shadow-lg border-b border-amber-600 bg-amber-600">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
        {/* App Title */}
        <Link to="/" className="text-2xl font-bold text-amber-800">
          My Gita
        </Link>

        {/* Settings Icon */}
        <Link
          to="/settings"
          className="text-amber-800 hover:text-amber-600 transition-transform duration-300 text-2xl"
  style={{
    animation: 'rotate 10s linear infinite',
  }}
  aria-label="Settings"
        >
          ⚙️
        </Link>
      </div>
    </nav>
  );
};

export default Header;
