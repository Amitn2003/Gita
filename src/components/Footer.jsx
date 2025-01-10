import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-yellow-800 text-white">
      <p>&copy; {new Date().getFullYear()} My Gita. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
