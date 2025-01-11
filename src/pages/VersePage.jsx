import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';

const VersePage = () => {
  const { ch, sl } = useParams(); // Chapter and verse numbers from the route
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVerses(ch)
      .then((data) => {
        const selectedVerse = data.find((v) => v.verse_number === parseInt(sl, 10));
        setVerse(selectedVerse);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching verse ${sl} for chapter ${ch}:`, error);
        setLoading(false);
      });
  }, [ch, sl]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!verse) {
    return <div className="p-4">No verse data available.</div>;
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-yellow-100 p-4 rounded">
        <h1 className="text-2xl font-bold">Verse {verse.verse_number}</h1>
        <p className="italic">{verse.text}</p>
      </div>

      {/* Translations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Translations</h2>
        {verse.translations.map((translation) => (
          <div key={translation.id} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="font-bold">{translation.author_name}</h3>
            <p>{translation.description}</p>
          </div>
        ))}
      </div>

      {/* Commentaries */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Commentaries</h2>
        {verse.commentaries.map((commentary) => (
          <div key={commentary.id} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="font-bold">{commentary.author_name}</h3>
            <p>{commentary.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersePage;
