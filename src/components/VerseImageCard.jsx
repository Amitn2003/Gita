// import React, { useState } from "react";
// import { captureVerseAsImage } from "../utils/htmlToImage";
// import ImagePreviewModal from "./ImagePreviewModal";




// const VerseImageCard = ({ verse, chapter , randomImage}) => {
//   const [imageUrl, setImageUrl] = useState(null);
//   const [downloading, setDownloading] = useState(false);
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const [imageData, setImageData] = useState(null); // State to store the image URL
//   const verseId = `verse-${chapter}-${verse.verse_number}`;
//   const handleGenerateImage = async () => {
//     const image = await captureVerseAsImage(verseId);
//     if (image) {
//       setImageUrl(image);
//       setShowModal(true); // Show modal after generating
//     }
//   };

//   const handleDownload = () => {
//     if (imageUrl) {
//       const link = document.createElement("a");
//       link.href = imageUrl;
//       link.download = `Gita_Chapter${chapter}_Verse${verse.verse_number}.png`;
//       link.click();
//     }
//   };
// //   const handleDownload = async () => {
// //     setDownloading(true);
// //     const imageData = await captureVerseAsImage(verseId);
// //     setDownloading(false);

// //     if (imageData) {
// //       const link = document.createElement("a");
// //       link.href = imageData;
// //       link.download = `Gita_Chapter${chapter}_Verse${verse.verse_number}.png`;
// //       link.click();
// //     }
// //     setImageData(randomImage);
// //     setShowModal(true);
// //   };
// //   const handleCloseModal = () => {
// //     setShowModal(false); // Close the modal
// //     setImageData(null); // Reset the image data
// //   };
//   // <div>
//   //    <div
//   //     id={verseId}
//   //     className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md text-center w-full max-w-lg mx-auto"
//   //   >
      
//   //     <h2 className="text-xl font-bold text-amber-800">
//   //       Chapter {chapter}, Verse {verse.verse_number}
//   //     </h2>
//   //     {randomImage && <img
//   //   src={randomImage}
//   //   alt={`Verse ${verse} from Chapter ${chapter}`}
//   //   className="w-full h-full object-contain sm:object-cover"
//   //   loading="lazy"
//   // />}
//   //     <p className="text-lg italic text-gray-800 my-4">{verse.text}</p>
//   //     <p className="text-md text-gray-700">{verse.translations[0]?.description}</p>

//   //     {/* Watermark */}
//   //     <p className="mt-2 text-sm text-gray-500">Shared from mygita.vercel.app</p>
//   //   </div>
    

//   //   {/* Buttons for Download & Share */}
//   //   <div className="flex justify-center mt-4 space-x-4">
//   //     <button
//   //       onClick={handleDownload}
//   //       className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//   //     >
//   //       {downloading ? "Downloading..." : "Download Image"}
//   //     </button>
//   //   </div>
//   // </div>
//   return (
//      <div>
//       <div
//         id={verseId}
//         className={`p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md text-center w-full max-w-lg mx-auto `}
//       >
//         <h2 className="text-xl font-bold text-amber-800">
//         Bhagavad Gita : Chapter {chapter}, Verse {verse.verse_number}
//         </h2>
//         <br />
//         <div className="h-48 sm:h-64 md:h-75 w-full mb-4 relative overflow-hidden rounded-lg">
//     <img
//       src={randomImage}
//       alt={`Verse ${verse} from Chapter ${chapter}`}
//       className="w-full h-full object-contain sm:object-cover"
//       loading="lazy"
//     />
//   </div>
//         <p className="text-lg italic text-gray-800 my-4">{verse.text}</p>
//         <p className="text-md text-gray-700">{verse.translations[0]?.description}</p>

//         <p className="mt-2 text-sm text-gray-300">Shared from mygita.vercel.app</p>
//       </div>

//       <div className="flex justify-center mt-4 space-x-4">
//         <button
//           onClick={handleGenerateImage}
//           className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//         >
//           Generate Image
//         </button>
//       </div>

//       {/* Modal Preview */}
//       {showModal && (
//         <ImagePreviewModal
//         chapter={chapter}
//         verse={verse}
//           imageUrl={randomImage}
//           onClose={() => setShowModal(false)}
//           onDownload={handleDownload}
//         />
//       )}
//     </div>
//   );
// };

// export default VerseImageCard;










import React, { useState, useRef } from "react";
import { captureElementAsImage } from "../utils/htmlToImage";
import ImagePreviewModal from "./ImagePreviewModal";

const VerseImageCard = ({ verse, chapter, randomImage }) => {
  const verseRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleGenerateImage = async () => {
    const image = await captureElementAsImage(verseRef);
    if (image) {
      setImageUrl(image);
      setShowModal(true); // Show modal after generating
    }
  };

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `Gita_Chapter${chapter}_Verse${verse.verse_number}.png`;
      link.click();
    }
  };

  return (
    <div>
      {/* Verse Card */}
      <div
        ref={verseRef}
        className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md text-center w-full max-w-lg mx-auto"
      >
        <h2 className="text-xl font-bold text-amber-800">
        Bhagavad Gita : Chapter {chapter}, Verse {verse.verse_number}
        </h2>
        <br />
        <div className="h-48 sm:h-64 md:h-75 w-full mb-4 relative overflow-hidden rounded-lg">
    <img
      src={randomImage}
      alt={`Verse ${verse} from Chapter ${chapter}`}
      className="w-full h-full object-contain sm:object-cover"
      loading="lazy"
    />
  </div>
        <p className="text-lg italic text-gray-800 my-4">{verse.text}</p>
        <p className="text-md text-gray-700">{verse.translations[0]?.description}</p>

        {/* Watermark */}
        <p className="mt-2 text-sm text-gray-500">Shared from mygita.vercel.app</p>
      </div>

      {/* Button to Generate Image */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handleGenerateImage}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Generate Image
        </button>
      </div>

      {/* Modal Preview */}
      {showModal && (
        <ImagePreviewModal
          imageUrl={imageUrl}
          onClose={() => setShowModal(false)}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default VerseImageCard;
