import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchChapter, fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';

const ChapterPage = () => {
  const { ch } = useParams(); // Chapter number from the route
  const [chapter, setChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch chapter details
    fetchChapter(ch)
      .then((data) => {
        setChapter(data);
        return fetchVerses(ch); // Fetch all verses for the chapter
      })
      .then((verseData) => {
        setVerses(verseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching data for chapter ${ch}:`, error);
        setLoading(false);
      });
  }, [ch]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!chapter) {
    return <div className="p-4">No chapter data available.</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {/* Chapter details */}
      <div>
        <h1 className="text-3xl font-bold">{chapter.name_translated} ({chapter.name})</h1>
        <p className="italic text-gray-600">{chapter.name_meaning}</p>
        <p className="mt-4">{chapter.chapter_summary}</p>
        <p className="font-bold mt-6">Total Verses: {chapter.verses_count}</p>
      </div>

      {/* Verse List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Verses</h2>
        {verses.map((verse) => (
          <Link
            key={verse.id}
            to={`/verse/${verse.chapter_number}/${verse.verse_number}`} // Link to the VersePage
            className="block p-4 border rounded bg-yellow-100 hover:bg-yellow-200"
          >
            <h3 className="font-bold">Verse {verse.verse_number}</h3>
            <p className="italic">{verse.text.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChapterPage;
