import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { getBookmarks, addBookmark, removeBookmark } from '../utils/storage';

const BookmarkButton = ({ verse }) => {
  const [bookmarked, setBookmarked] = useState(() => {
    const bookmarks = getBookmarks();
    return bookmarks.some((b) => b._id === verse._id);
  });

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(verse._id);
      toast.success('Bookmark removed!');
    } else {
      addBookmark(verse);
      toast.success('Bookmark added!');
    }
    setBookmarked(!bookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`px-4 py-2 rounded ${
        bookmarked ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {bookmarked ? '❤️ Remove Bookmark' : '🤍 Add to Bookmarks'}
    </button>
  );
};

export default BookmarkButton;
