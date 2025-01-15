import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';

const VersePage = () => {
  const { ch, sl } = useParams(); 
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

  // <div className="p-4 space-y-6">
  //   <div className="bg-yellow-100 p-4 rounded">
  //     <h1 className="text-2xl font-bold">Verse {verse.verse_number}</h1>
  //     <p className="italic">{verse.text}</p>
  //   </div>

  //   {/* Translations */}
  //   <div className="space-y-4">
  //     <h2 className="text-xl font-semibold">Translations</h2>
  //     {verse.translations.map((translation) => (
  //       <div key={translation.id} className="p-4 border rounded shadow-sm bg-white">
  //         <h3 className="font-bold">{translation.author_name}</h3>
  //         <p>{translation.description}</p>
  //       </div>
  //     ))}
  //   </div>

  //   {/* Commentaries */}
  //   <div className="space-y-4">
  //     <h2 className="text-xl font-semibold">Commentaries</h2>
  //     {verse.commentaries.map((commentary) => (
  //       <div key={commentary.id} className="p-4 border rounded shadow-sm bg-white">
  //         <h3 className="font-bold">{commentary.author_name}</h3>
  //         <p>{commentary.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  return (
    <div className="p-6 space-y-8">
      {/* Verse Card */}
      <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
        <h1 className="text-3xl font-bold text-center text-amber-800 mb-4">
          Chapter {ch}, Verse {sl}
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

      {/* Commentaries Section */}
      {verse.commentaries.length > 0 && (
        <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">Commentaries</h2>
          <div className="space-y-6">
            {verse.commentaries.map((commentary) => (
              <div key={commentary.id} className="p-4 border rounded bg-yellow-50">
                <h3 className="font-bold text-lg text-amber-800 mb-2">
                  {commentary.author_name}
                </h3>
                <p className="text-gray-800">{commentary.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VersePage;
