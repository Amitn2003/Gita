import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchChapter, fetchVerses } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { SanskritContext } from '../context/SanskritContext';

const ChapterPage = () => {
  const { ch } = useParams(); // Chapter number from the route
  const { isSanskrit } = useContext(SanskritContext);
  const [chapter, setChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [isSanskrit, setIsSanskrit] = useState(false); // State to toggle Sanskrit text

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


  //   <div className="p-4 space-y-6">
  //   {/* Chapter Details */}
  //   <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
  //     <h1 className="text-3xl font-bold text-amber-800 mb-4 text-center">
  //       {chapter.name_translated} ({chapter.name})
  //     </h1>
  //     <p className="text-lg italic text-gray-700 text-center">
  //       {chapter.name_meaning}
  //     </p>
  //     <p className="mt-4 text-base text-gray-900 leading-relaxed">
  //       {chapter.chapter_summary}
  //     </p>
  //     <p className="font-bold mt-6 text-lg text-gray-900 text-right">
  //       Total Verses: {chapter.verses_count}
  //     </p>
  //   </div>

  //   {/* Verse List */}
  //   <div className="space-y-4">
  //     <h2 className="text-2xl font-semibold text-amber-900">
  //       Verses in this Chapter
  //     </h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {verses.map((verse) => {
  //         let got = false;
  //         let translation = "Translation not available...";

  //         for (let i = 0; i < verse.translations.length; i++) {
  //           const t = verse.translations[i];
  //           if (t.language === 'english') {          
  //             translation = t.description;          
  //             break; // Exit the loop once the English translation is found          
  //           }          
  //         }

  //         console.log(translation)
  //         return(
  //         <div
  //           key={verse.id}
  //           className="p-6 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
  //         >
  //           <h3 className="text-lg font-bold text-amber-800 mb-2">
  //             Verse {verse.verse_number}
  //           </h3>
  //           <p className="italic mb-2 text-gray-800">
  //             {verse.text.slice(0, 120)}...
  //           </p>
  //           <p className="text-gray-700 mb-4">
  //             {translation.slice(0, 200)}...
  //           </p>
  //           <Link
  //             to={`/verse/${verse.chapter_number}/${verse.verse_number}`}
  //             className="text-blue-600 hover:underline font-semibold"
  //           >
  //             Read More
  //           </Link>
  //         </div>
  //       )})}
  //     </div>
  //   </div>
  // </div>




  // <div className="p-4 space-y-6">
  //   {/* Chapter Details */}
  //   <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">
  //     <h1 className="text-3xl font-bold text-amber-800 mb-4 text-center">
  //       {isSanskrit ? chapter.name : chapter.name_translated} ({chapter.name})
  //     </h1>
  //     <p className="text-lg italic text-gray-700 text-center">
  //       {chapter.name_meaning}
  //     </p>
  //     <p className="mt-4 text-base text-gray-900 leading-relaxed">
  //       {chapter.chapter_summary}
  //     </p>
  //     <p className="font-bold mt-6 text-lg text-gray-900 text-right">
  //       Total Verses: {chapter.verses_count}
  //     </p>
  //   </div>

  //   {/* Verse List */}
  //   <div className="space-y-4">
  //     <h2 className="text-2xl font-semibold text-amber-900">
  //       Verses in this Chapter
  //     </h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {verses.map((verse) => {
  //         let translation = '';
  //         for (let i = 0; i < verse.translations.length; i++) {
  //           const t = verse.translations[i]; 
  //           if (t.language === 'english') { 
  //             translation = t.description;
  //             break; // Exit the loop once the English translation is found
  //           }
  //         }
  //         // console.log(translation)
  //         return(
  //         <div
  //           key={verse.id}
  //           className="p-6 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
  //         >
  //           <h3 className="text-lg font-bold text-amber-800 mb-2">
  //             Verse {verse.verse_number}
  //           </h3>
  //           <p className="italic mb-2 text-gray-800">
  //             {isSanskrit ? verse.text : translation.slice(0, 300)}...
  //           </p>
  //           <Link
  //             to={`/verse/${verse.chapter_number}/${verse.verse_number}`}
  //             className="text-blue-600 hover:underline font-semibold"
  //           >
  //             Read More
  //           </Link>
  //         </div>
  //       )})}
  //     </div>
  //   </div>
  // </div>


  return (
    <div className="p-4 space-y-6">

  {/* Chapter Details */}

  <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md">

    <h1 className="text-3xl font-bold text-amber-800 mb-4 text-center">

      {isSanskrit ? chapter.name : chapter.name_translated} ({chapter.name})

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

            <Link

              to={`/verse/${verse.chapter_number}/${verse.verse_number}`}

              className="text-blue-600 hover:underline font-semibold"

            >

              Read More

            </Link>

          </div>

        );

      })}

    </div>

  </div>
  </div>
  );
};

export default ChapterPage;
