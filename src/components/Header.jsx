import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sanskritMode, setSanskritMode] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-yellow-800 text-white">
      <Link to="/" className="text-2xl font-bold">
        My Gita
      </Link>
      <button
        onClick={() => setSanskritMode(!sanskritMode)}
        className="bg-white text-yellow-800 px-4 py-2 rounded"
      >
        {sanskritMode ? 'Sanskrit Off' : 'Sanskrit On'}
      </button>
    </header>
  );
};

export default Header;
