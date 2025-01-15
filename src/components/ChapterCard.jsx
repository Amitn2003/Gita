import React from 'react';
import { Link } from 'react-router-dom';

const ChapterCard = ({ chapter }) => {
  // <Link
  //   to={`/chapter/${chapter.chapter_number}`} // Ensure the correct chapter number is passed
  //   className="block max-w-sm p-6 border-4 border-amber-600 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105"
  // >
  //   <h2 className="text-3xl font-extrabold text-indigo-900 text-center font-serif">{chapter.name_translated} ({chapter.name})</h2>
  //   <span className="block text-lg italic text-gray-700 mt-2 text-center">{chapter.name_meaning}</span>
  //   <span className="block text-sm text-gray-600 mt-2 text-center">({chapter.verses_count} verses)</span>
  //   <p className="mt-4 text-base text-gray-800 leading-relaxed">{chapter.chapter_summary.slice(0, 100)}...</p>
  // </Link>
  // <Link
  //   to={`/chapter/${chapter.chapter_number}`} // Ensure the correct chapter number is passed
  //   // className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  // >
    
  //   <div className="max-w-sm mx-auto p-6 border border-amber-600 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">


  //     <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

  //       {chapter.name_translated} ({chapter.name})

  //     </h2>

  //     <span className="block text-lg italic text-gray-700 mt-2 text-center">

  //       {chapter.name_meaning}

  //     </span>

  //     <span className="block text-sm text-gray-600 mt-2 text-center">

  //       ({chapter.verses_count} verses)

  //     </span>

  //     <p className="mt-4 text-base text-gray-800 leading-relaxed">

  //       {chapter.chapter_summary.slice(0, 100)}...

  //     </p>


  //   </div>
  // </Link>
  return (
    <Link
      to={`/chapter/${chapter.chapter_number}`}
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6" // Responsive grid
    >
      <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="mb-3 text-2xl font-bold text-amber-800 tracking-wide text-center">
          {chapter.name_translated} ({chapter.name})
        </h2>
        <span className="block text-lg italic text-gray-800 mt-2 text-center">
          {chapter.name_meaning}
        </span>
        <span className="block text-sm text-gray-600 mt-1 text-center">
          ({chapter.verses_count} verses)
        </span>
        <p className="mt-4 text-base text-gray-900 leading-relaxed">
          {chapter.chapter_summary.slice(0, 320)}...
        </p>
      </div>
    </Link>
  );
};

export default ChapterCard;
