import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchChapter, fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { SanskritContext } from '../context/SanskritContext';




const chapterImages = [
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

const getRandomImage = (chapterNumber) => {
  const images = chapterImages[chapterNumber - 1]; // Row index is chapter number - 1
  if (images && images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  // Fallback image if no images available for this chapter
  return "/gita-110.jpg";
};



const ChapterPage = () => {
  const { ch } = useParams(); // Chapter number from the route
  const { isSanskrit } = useContext(SanskritContext);
  const [chapter, setChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState("");
  // const [isSanskrit, setIsSanskrit] = useState(false); // State to toggle Sanskrit text


  useEffect(() => {
    window.scrollTo(0, 0);
    // Set a random image when the page loads
    setRandomImage(getRandomImage(parseInt(ch, 10)));
    
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
    <div className="p-4 lg:px-16 xl:px-24 space-y-6">

  {/* Chapter Details */}
  
  <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md ">
  <div className="h-72 w-full mb-4 relative overflow-hidden rounded-lg">
    <img
      src={randomImage}
      alt={`Chapter ${chapter.number}`}
      className="w-full h-full object-contain" // Use object-contain to prevent cropping
      loading="lazy"
    />
  </div>

    <h1 className="text-3xl font-bold text-amber-800 mb-4 text-center eng-sanskrit">

      {isSanskrit ? chapter.name : chapter.name_translated} 
      
      {/* ({chapter.name}) */}
    </h1>

    <p className="text-lg italic text-gray-700 text-center">

      {chapter.name_meaning}

    </p>

    <p className="mt-4 text-base text-gray-900 leading-relaxed">

      {chapter.chapter_summary}

    </p>

    <p className="font-bold mt-6 text-lg text-gray-900 text-right">

      Total Verses: {chapter.verses_count}

    </p>

  </div>


  {/* Verse List */}

  <div className="space-y-4">

    <h2 className="text-2xl font-semibold text-amber-900 text-center border-b-2 border-amber-600 pb-2">

      Verses in this Chapter

    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {verses.map((verse) => {

        let translation = '';

        for (let i = 0; i < verse.translations.length; i++) {

          const t = verse.translations[i]; 

          if (t.language === 'english') { 

            translation = t.description;

            break; // Exit the loop once the English translation is found

          }

        }

        return (

            <Link

to={`/verse/${verse.chapter_number}/${verse.verse_number}`}

>
          <div

            key={verse.id}

            className="w-full h-52 p-4 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"

            >

            <h3 className="text-lg font-bold text-amber-800 mb-2">

              Verse {verse.verse_number}

            </h3>

            <p className="italic mb-2 text-gray-800 overflow-hidden text-ellipsis">

              {isSanskrit ? verse.text : translation.slice(0, 220)}...

            </p> 

          </div>
            </Link>

        );

      })}

    </div>

  </div>
  </div>
  );
};

export default ChapterPage;
