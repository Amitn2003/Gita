import React from "react";

const SocialShare = ({ imageUrl }) => {
  const shareText = "Check out this verse from Bhagavad Gita!";
  
  return (
    <div className="flex justify-center mt-4 space-x-4">
      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(imageUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
      >
        Share on WhatsApp
      </a>

      {/* Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(imageUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Share on Twitter
      </a>

      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 text-white px-4 py-2 rounded shadow hover:bg-blue-900"
      >
        Share on Facebook
      </a>
    </div>
  );
};

export default SocialShare;
