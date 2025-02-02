import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100 flex items-center justify-center">
      <div className="text-center p-10 bg-white border border-amber-700 rounded-lg shadow-xl">
        <h1 className="text-6xl font-extrabold text-amber-800 mb-6">404</h1>
        <p className="text-2xl text-gray-700 mb-4">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="italic text-gray-600 mb-8">
          Perhaps the wisdom of the Gita can guide you back.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
