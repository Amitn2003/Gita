import React, { createContext, useState, useEffect } from 'react';

export const SanskritContext = createContext();

export const SanskritProvider = ({ children }) => {
  // Retrieve initial language and theme from localStorage
  const initialLanguage = localStorage.getItem('language') || 'english';
  const initialTheme = localStorage.getItem('theme') || 'light';

  const [isSanskrit, setIsSanskrit] = useState(initialLanguage === 'sanskrit');
  const [theme, setTheme] = useState(initialTheme);

  // Toggle Sanskrit language
  const toggleSanskrit = () => {
    setIsSanskrit((prev) => {
      const newLanguage = prev ? 'english' : 'sanskrit';
      localStorage.setItem('language', newLanguage);
      return !prev;
    });
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to document body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <SanskritContext.Provider
      value={{
        isSanskrit,
        toggleSanskrit,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </SanskritContext.Provider>
  );
};
