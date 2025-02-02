import React from 'react';
import { Link } from 'react-router-dom';

const ChapterCard = ({ chapter }) => {

  
  return (
    <Link

    to={`/chapter/${chapter.chapter_number}`}

    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6" // Responsive grid

  >

    <div className="w-full h-88 p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">

      <h2 className="mb-3 text-2xl font-bold text-amber-800 tracking-wide text-center  ">

        {chapter.name_translated} (<span className='noto-serif-devanagari-500'>{chapter.name}</span>)

      </h2>

      <span className="block text-lg italic text-gray-800 mt-2 text-center eng-sanskrit">

        {chapter.name_meaning}

      </span>

      <span className="block text-sm text-gray-600 mt-1 text-center">

        ({chapter.verses_count} verses)

      </span>

      <p className="mt-4 text-base text-gray-900 leading-relaxed overflow-hidden text-ellipsis">

        {chapter.chapter_summary.slice(0, 200)}...

      </p>

    </div>

  </Link>
  );
};

export default ChapterCard;
