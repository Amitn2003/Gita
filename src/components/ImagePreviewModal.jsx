// import React from "react";

// const ImagePreviewModal = ({ imageUrl, onClose, onDownload ,chapter,verse}) => {
//   if (!imageUrl) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
//         <h2 className="text-xl font-bold mb-4">Download Preview</h2>
        
//         <div
//         className={`p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md text-center w-full max-w-lg mx-auto `}
//       >
//         <h2 className="text-xl font-bold text-amber-800">
//         Bhagavad Gita : Chapter {chapter}, Verse {verse.verse_number}
//         </h2>
//         <br />
//         <div className="h-48 sm:h-64 md:h-75 w-full mb-4 relative overflow-hidden rounded-lg">
//     <img
//       src={imageUrl}
//       alt={`Verse ${verse} from Chapter ${chapter}`}
//       className="w-full h-full object-contain sm:object-cover"
//       loading="lazy"
//     />
//   </div>
//         <p className="text-lg italic text-gray-800 my-4">{verse.text}</p>
//         <p className="text-md text-gray-700">{verse.translations[0]?.description}</p>

//         <p className="mt-2 text-sm text-gray-300">Shared from mygita.vercel.app</p>
//       </div>
        
//         <div className="flex justify-center space-x-4 p-1 m-2">
//           <button
//             onClick={onDownload}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//           >
//             Download
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImagePreviewModal;
















import React from "react";

const ImagePreviewModal = ({ imageUrl, onClose, onDownload }) => {
  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-xl font-bold mb-4">Verse Preview</h2>
        <img src={imageUrl} alt="Verse Preview" className="w-full rounded-md shadow-md mb-4" />
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={onDownload}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Download
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
