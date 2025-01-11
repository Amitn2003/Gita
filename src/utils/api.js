const API_BASE_URL = 'https://bhagavad-gita3.p.rapidapi.com/v2';
const API_HEADERS = {
  'x-rapidapi-key': '9e17dd7387msh4e3da551f03d5bbp1b8162jsnf6f2281cfbf6',
  'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
};

// Fetch all chapters
export const fetchChapters = async () => {
  const url = `${API_BASE_URL}/chapters/?skip=0&limit=18`;
  const options = {
    method: 'GET',
    headers: API_HEADERS,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch chapters');
  }
  return response.json();
};

// Fetch a single chapter by chapter number
export const fetchChapter = async (chapterNumber) => {
  const proxy = ''; // Use a proxy if necessary: 'https://cors-anywhere.herokuapp.com/'
  const url = `${proxy}https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9e17dd7387msh4e3da551f03d5bbp1b8162jsnf6f2281cfbf6',
      'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch chapter ${chapterNumber}`);
  }
  return response.json();
};


// export const fetchVerses = async (chapterNumber) => {
//   const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '9e17dd7387msh4e3da551f03d5bbp1b8162jsnf6f2281cfbf6',
//       'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
//     },
//   };

//   const response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch verses for chapter ${chapterNumber}`);
//   }
//   return response.json();
// };

export const fetchVerses = async (chapterNumber) => {
  const proxy = ''; // Use a proxy if necessary: 'https://cors-anywhere.herokuapp.com/'
  const url = `${proxy}https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9e17dd7387msh4e3da551f03d5bbp1b8162jsnf6f2281cfbf6',
      'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch verses for chapter ${chapterNumber}`);
  }
  return response.json();
};
