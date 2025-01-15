import React, { createContext, useState } from 'react';

export const SanskritContext = createContext();

export const SanskritProvider = ({ children }) => {
  const [isSanskrit, setIsSanskrit] = useState(false);

  const toggleSanskrit = () => {
    setIsSanskrit((prev) => !prev);
  };

  return (
    <SanskritContext.Provider value={{ isSanskrit, toggleSanskrit }}>
      {children}
    </SanskritContext.Provider>
  );
};
