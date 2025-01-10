import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VerseCard from '../components/VerseCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { fetchChapter } from '../utils/api';

const ChapterPage = () => {
  const { ch } = useParams();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChapter(ch).then((data) => {
      setChapter(data);
      setLoading(false);
    });
  }, [ch]);

  return (
    <div className="p-4">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{chapter?.name}</h1>
          <p className="mb-6">{chapter?.meaning?.en}</p>
          <div className="grid gap-4">
            {[...Array(chapter?.verses_count)].map((_, index) => (
              <VerseCard key={index} chapter={ch} verse={index + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChapterPage;
