const DAILY_VERSES = [
    { chapter: 2, verse: 47 }, // Chapter 2, Verse 47
    { chapter: 6, verse: 16 }, // Chapter 6, Verse 16
    { chapter: 5, verse: 22 }, // Chapter 5, Verse 22
    { chapter: 2, verse: 37 }, // Chapter 2, Verse 37
  ];
  
  // Get today's daily verse based on date
  export const getDailyVerse = () => {
    const today = new Date();
    const key = `dailyVerse-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    
    // Check if verse is already cached
    const cachedVerse = localStorage.getItem(key);
    if (cachedVerse) {
      return JSON.parse(cachedVerse);
    }
  
    // Select a random verse from the pool
    const randomIndex = Math.floor(Math.random() * DAILY_VERSES.length);
    const selectedVerse = DAILY_VERSES[randomIndex];
  
    // Cache the selected verse in localStorage
    localStorage.setItem(key, JSON.stringify(selectedVerse));
    return selectedVerse;
  };
  