import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVerses } from '../utils/api';
import LoadingVerseSkeleton from '../components/LoadingVerseSkeleton';
import useSpeechSynthesis from '../hooks/useSpeachSynthesis';
import VerseImageCard from "../components/VerseImageCard";
import SocialShare from "../components/SocilShare";
// import { SanskritContext } from "../context/SanskritContext";


// Verse-specific image paths
const verseImages = [
  ["/images/Chapter-1-1.jpeg", "/images/Chapter-1-2.jpeg", "/images/Chapter-1-3.jpeg", "/images/Chapter-1-4.jpeg"],
  ["/images/Chapter-2-1.jpeg", "/images/Chapter-2-2.jpeg"],
  ["/images/Chapter-3-1.jpeg", "/images/Chapter-3-2.jpeg", "/images/Chapter-3-3.jpeg", "/images/Chapter-3-4.jpeg"],
  ["/images/Chapter-4-1.jpeg", "/images/Chapter-4-2.jpeg", "/images/Chapter-4-3.jpeg", "/images/Chapter-4-4.jpeg"],
  ["/images/Chapter-5-1.jpeg", "/images/Chapter-5-2.jpeg", "/images/Chapter-5-3.jpeg"],
  ["/images/Chapter-6-1.jpeg", "/images/Chapter-6-2.jpeg", "/images/Chapter-6-3.jpeg"],
  ["/images/Chapter-7-1.jpeg", "/images/Chapter-7-2.jpeg", "/images/Chapter-7-3.jpeg"],
  ["/images/Chapter-8-1.jpeg", "/images/Chapter-8-2.jpeg"],
  ["/images/Chapter-9-1.jpeg", "/images/Chapter-9-2.jpeg", "/images/Chapter-9-3.jpeg", "/images/Chapter-9-4.jpeg"],
  ["/images/Chapter-10-1.jpeg", "/images/Chapter-10-2.jpeg"],
  ["/images/Chapter-11-1.jpeg", "/images/Chapter-11-2.jpeg", "/images/Chapter-11-3.jpeg"],
  ["/images/Chapter-12-1.jpeg", "/images/Chapter-12-2.jpeg", "/images/Chapter-12-3.jpeg", "/images/Chapter-12-4.jpeg"],
  ["/images/Chapter-13-1.jpeg", "/images/Chapter-13-2.jpeg", "/images/Chapter-13-3.jpeg", "/images/Chapter-13-4.jpeg"],
  ["/images/Chapter-14-1.jpeg", "/images/Chapter-14-2.jpeg", "/images/Chapter-14-3.jpeg"],
  ["/images/Chapter-15-1.jpeg", "/images/Chapter-15-2.jpeg"],
  ["/images/Chapter-16-1.jpeg", "/images/Chapter-16-2.jpeg", "/images/Chapter-16-3.jpeg", "/images/Chapter-16-4.jpeg"],
  ["/images/Chapter-17-1.jpeg", "/images/Chapter-17-2.jpeg", "/images/Chapter-17-3.jpeg"],
  ["/images/Chapter-18-1.jpeg", "/images/Chapter-18-2.jpeg", "/images/Chapter-18-3.jpeg", "/images/Chapter-18-4.jpeg", "/images/Chapter-18-5.jpeg", "/images/Chapter-18-6.jpeg", "/images/Chapter-18-7.jpeg", "/images/Chapter-18-8.jpeg"]
];

// Helper to get a random image from verseImages array
const getRandomImage = (chapterNumber) => {
  const images = verseImages[chapterNumber - 1];
  if (images && images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  return "/gita-verse-default.jpg"; // Fallback image
};


const VersePage = () => {
  const { ch, sl } = useParams(); 
  // const { isSanskrit } = useContext(SanskritContext);
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const { isSpeaking, speak, pause, resume, stop } = useSpeechSynthesis();


  useEffect(() => {
    setRandomImage(getRandomImage(parseInt(ch, 10))); // Set random image when the page loads

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
    <div className="p-6 lg:px-16 xl:px-24 space-y-8">
      {/* Random Verse Image */}
      
      {/* Verse Card */}
      {/* <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
      <div className="h-75 w-full mb-4 relative overflow-hidden rounded-lg">
        <img
          src={randomImage}
          alt={`Verse ${sl} from Chapter ${ch}`} lazyload="true"
          className="w-full h-full object-cover"
        />
      </div>
        <h1 className="text-3xl font-bold text-center text-amber-800 mb-4">
          Chapter {ch}, Verse {sl}
        </h1>
        <p className="text-lg  text-gray-800 text-center mb-4 noto-serif-devanagari-500">
          {verse.text}
        </p>
        <p className="text-lg  text-gray-800 text-center mb-4 ">
          {englishTranslation}
        </p>
        <div className="flex justify-center gap-4 mb-4">
        <button
                onClick={() => handleSpeakTranslation(englishTranslation)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
              >
                Speak Translation
              </button>


          <button
            onClick={handleSpeakVerse}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
    >
            Speak Verse
          </button>
          
        </div>
      </div> */}
      <div className="p-4 sm:p-6 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
  {/* Image Section */}
  {/* <div className="h-48 sm:h-64 md:h-75 w-full mb-4 relative overflow-hidden rounded-lg">
    <img
      src={randomImage}
      alt={`Verse ${sl} from Chapter ${ch}`}
      className="w-full h-full object-contain sm:object-cover"
      loading="lazy"
    />
  </div> */}

  {/* Title */}
  {/* <h1 className="text-2xl sm:text-3xl font-bold text-center text-amber-800 mb-4">
    Chapter {ch}, Verse {sl}
  </h1> */}

  {/* Verse Text */}
  {/* <p className="text-base sm:text-lg text-gray-800 text-center mb-4 noto-serif-devanagari-500">
    {verse.text}
  </p> */}

  {/* English Translation */}
  {/* <p className="text-base sm:text-lg text-gray-800 text-center mb-4">
    {englishTranslation}
  </p> */}

  {/* Action Buttons */}
          <div>
          <VerseImageCard verse={verse} chapter={ch} randomImage={randomImage}/>
          <br />
          {/* {randomImage && <SocialShare imageUrl={randomImage} />} */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
  <button
                onClick={() => handleSpeakTranslation(englishTranslation)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
              >
                Speak Translation
              </button>


    {/* Speech Controls for Verse */}
    <button
            onClick={handleSpeakVerse}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
    >
            Speak Verse
          </button>

  </div>
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
