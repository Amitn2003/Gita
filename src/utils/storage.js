export const getBookmarks = () => {
    return JSON.parse(localStorage.getItem('bookmarks')) || [];
  };
  
  export const addBookmark = (verse) => {
    const bookmarks = getBookmarks();
    bookmarks.push(verse);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };
  
  export const removeBookmark = (id) => {
    const bookmarks = getBookmarks().filter((b) => b._id !== id);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };
  