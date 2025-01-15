import React, { useEffect, useState } from 'react';
import ChapterCard from '../components/ChapterCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { fetchChapters } from '../utils/api';

const HomePage = () => {
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

export default HomePage;
