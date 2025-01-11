import React from 'react';
import { Link } from 'react-router-dom';

const ChapterCard = ({ chapter }) => {
  return (
    <Link
      to={`/chapter/${chapter.chapter_number}`} // Ensure the correct `chapter_number` is passed
      className="block p-4 border rounded bg-yellow-100 hover:bg-yellow-200 transition"
    >
      <h2 className="text-xl font-bold">{chapter.name_translated} ({chapter.name})</h2>
      <p className="italic">{chapter.name_meaning}</p>
      <p>{chapter.verses_count} verses</p>
      <p className="mt-2 text-sm text-gray-600">{chapter.chapter_summary.slice(0, 100)}...</p>
    </Link>
  );
};

export default ChapterCard;
