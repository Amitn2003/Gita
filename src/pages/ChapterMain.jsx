import React, { useEffect, useState } from 'react';
import ChapterCard from '../components/ChapterCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { fetchChapters } from '../utils/api';

const ChapterMain = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChapters()
      .then((data) => {
        setChapters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chapters:', error);
        setLoading(false);
      });
    }, []);

  // <div className="p-4">
  //   <h1 className="text-3xl font-bold mb-4">Bhagavad Gita Chapters</h1>
  //   {loading ? (
  //     <LoadingSkeleton />
  //   ) : (
  //     <div className="grid gap-4">
  //       {chapters.map((chapter) => (
  //         <ChapterCard key={chapter.id} chapter={chapter} />
  //       ))}
  //     </div>
  //   )}
  // </div>
  if(loading == true) {
    return( <>
    <div className="p-4">
    <h1 className="text-4xl font-bold text-center mb-6 text-amber-900">
      Bhagavad Gita Chapters
    </h1>
    <div className="space-y-4">

    {/* <h2 className="text-2xl font-semibold text-amber-900 text-center border-b-2 border-amber-600 pb-2">

      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>

    </h2> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {Array.from({ length: 18 }).map((_, index) => (

        <div

          key={index}

          className="w-full h-80 p-4 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md animate-pulse"

        >

          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <br />

          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <br />

          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>

        </div>

      ))}

    </div>

  </div>
  </div>
  </>)
  }
  return (
    <div className="p-4">
    <h1 className="text-4xl font-bold text-center mb-6 text-amber-900">
      Bhagavad Gita Chapters
    </h1>
    <div className="flex flex-wrap -mx-4">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.chapter_number} chapter={chapter} />
      ))}
    </div>
  </div>
  );
};

export default ChapterMain;
