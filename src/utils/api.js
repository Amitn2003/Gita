export const fetchChapters = async () => {
    const response = await fetch('https://vedicscriptures.github.io/chapters');
    return response.json();
  };
  
  export const fetchChapter = async (ch = 1) => {
    const response = await fetch(`https://vedicscriptures.github.io/chapter/${ch}`);
    return response.json();
  };
  
  export const fetchVerse = async (ch = 1, sl = 1) => {
    const response = await fetch(`https://vedicscriptures.github.io/slok/${ch}/${sl}`);
    let res = await response.json();
    console.log(res)
    return res;
  };
  