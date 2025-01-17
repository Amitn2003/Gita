import React, { useEffect, useState } from 'react';
import { getDailyVerse } from '../utils/dailyVerse';
import { fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';

const DailyVersePage = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dailyVerse = getDailyVerse();

    fetchVerses(dailyVerse.chapter)
      .then((data) => {
        const selectedVerse = data.find((v) => v.verse_number === dailyVerse.verse);
        setVerse(selectedVerse);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching daily verse:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!verse) {
    return <div className="p-4">No daily verse available.</div>;
  }

  return (
    <div className="p-6 space-y-8">
      {/* Verse Card */}
      <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
        <h1 className="text-3xl font-bold text-center text-amber-800 mb-4">
          Daily Verse: Chapter {verse.chapter_number}, Verse {verse.verse_number}
        </h1>
        <p className="text-lg italic text-gray-800 text-center mb-4">
          {verse.text}
        </p>
      </div>

      {/* Translations Section */}
      <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Translations</h2>
        <div className="space-y-6">
          {verse.translations.map((translation) => (
            <div key={translation.id} className="p-4 border rounded bg-yellow-50">
              <h3 className="font-bold text-lg text-amber-800 mb-2">
                {translation.author_name}
              </h3>
              <p className="text-gray-800">{translation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyVersePage;
