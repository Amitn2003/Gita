import React from 'react';
import { Link } from 'react-router-dom';

const ChapterCard = ({ chapter }) => {
  return (
    <Link to={`/chapter/${chapter.chapter_number}`} className="block p-4 border rounded bg-yellow-100">
      <h2 className="text-xl font-bold">{chapter.name}</h2>
      <p>{chapter.meaning?.en}</p>
    </Link>
  );
};

export default ChapterCard;
