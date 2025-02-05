import React from 'react';
import { Link } from 'react-router-dom';


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



const ChapterCard = ({ chapter }) => {
  // const imageUrl = `/images/Chapter-${chapter.chapter_number}.jpeg`;
  const imageUrl = getRandomImage(chapter.chapter_number);
  console.log(imageUrl)

  return (
    <Link
    to={`/chapter/${chapter.chapter_number}`}
    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6" 
  >
     
        {/* Chapter Image */}

    <div className="w-full h-88 p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
      <h2 className="mb-3 text-2xl font-bold text-amber-800 tracking-wide text-center  ">

        {chapter.name_translated} (<span className='noto-serif-devanagari-500'>{chapter.name}</span>)

      </h2>

    <div className="h-40 w-full mb-4 relative overflow-hidden rounded-lg">

          <img
            src={imageUrl}
            alt={`Chapter ${chapter.chapter_number}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      <span className="block text-lg italic text-gray-800 mt-2 text-center eng-sanskrit">

        {chapter.name_meaning}

      </span>

      <span className="block text-sm text-gray-600 mt-1 text-center">

        ({chapter.verses_count} verses)

      </span>

      <p className="mt-4 text-base text-gray-900 leading-relaxed overflow-hidden text-ellipsis">

        {chapter.chapter_summary.slice(0, 200)}...

      </p>

    </div>

  </Link>
  );
};

export default ChapterCard;
