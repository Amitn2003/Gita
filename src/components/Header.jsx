import React, { useState, useContext } from 'react';
import { SanskritContext } from '../context/SanskritContext';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/gitaicon.png';

const Header = () => {
  const { isSanskrit, toggleSanskrit } = useContext(SanskritContext);

  return (
    <nav className="p-4 bg-amber-600 shadow-md flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
      <img src={LogoImage} alt="Gita logo" className='h-10 w-10 inline m-1'  />
        My Gita
      </Link>
      <button
        onClick={toggleSanskrit}
        className="px-4 py-2 bg-white text-amber-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        {isSanskrit ? 'Show Translated' : 'Show Sanskrit'}
      </button>
    </nav>
  );
};

export default Header;
