import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVerses } from '../utils/api';
import LoadingVerseSkeleton from '../components/LoadingVerseSkeleton';
import useSpeechSynthesis from '../hooks/useSpeachSynthesis';


const VersePage = () => {
  const { ch, sl } = useParams(); 
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isSpeaking, speak, pause, resume, stop } = useSpeechSynthesis();

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
    return <LoadingVerseSkeleton />;
  }

  if (!verse) {
    return <div className="p-4">No verse data available.</div>;
  }

  const getEnglishTranslation = (verse) => {
    for (const translation of verse.translations) {
      if (translation.language.toLowerCase() === 'english') {
        return translation.description; // Return the first English translation found
      }
    }
    return null; // If no English translation found, return null
  };
  const englishTranslation = getEnglishTranslation(verse);
  console.log(englishTranslation)
  
  

  // Handle speech for verse, translations, and commentaries
  const handleSpeakVerse = () => {
    if (verse.text) speak(verse.text, 'sa-IN'); // Sanskrit language code for verse
  };

  const handleSpeakTranslation = (translation) => {
    console.log(translation)
    speak(translation, 'en-US'); // English language for translations
  };

  const handleSpeakCommentary = (commentary) => {
    speak(commentary.description, 'en-US'); // Speak commentary in English
  };



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
        <p className="text-lg italic text-gray-800 text-center mb-4">
          {englishTranslation}
        </p>
        <div className="flex justify-center gap-4 mb-4">
        <button
                onClick={() => handleSpeakTranslation(englishTranslation)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
              >
                Speak Translation
              </button>


         {/* Speech Controls for Verse */}
         {/* <div className="flex justify-center space-x-4 mt-4"> */}
          <button
            onClick={handleSpeakVerse}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
    >
            Speak Verse
          </button>
          
        </div>
      </div>

      {/* Translations Section */}
      <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Translations</h2>
        <div className="space-y-6">
          {verse.translations.map((translation) => {
            // console.log(translation.language)
            return(
            <div key={translation.id} className="p-4 border rounded bg-yellow-50">
              <h3 className="font-bold text-lg text-amber-800 mb-2">
                {translation.author_name}
              </h3>
              <p className="text-gray-800">{translation.description}</p>
            </div>
          )})}
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
