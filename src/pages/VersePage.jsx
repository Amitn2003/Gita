import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVerse } from '../utils/api';
import LoadingSkeleton from '../components/LoadingSkeleton';

const VersePage = () => {
  const { ch, sl } = useParams();
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState(''); // Current selected author key
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

  // Fetch verse data
  useEffect(() => {
    fetchVerse(ch, sl).then((data) => {
      setVerse(data);

      // Filter authors that have an `et` field and set the first one as default
      const authorsWithEt = Object.keys(data)
        .filter((key) => data[key]?.et) // Only include authors with `et` field
        .map((key) => ({
          key,
          name: data[key]?.author,
          et: data[key]?.et,
        }));

      if (authorsWithEt.length > 0) {
        setSelectedAuthor(authorsWithEt[0].key); // Set the first valid author as default
      }
      setLoading(false);
    });
  }, [ch, sl]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  // Filter authors with `et` for the dropdown
  const authorsWithEt = Object.keys(verse)
    .filter((key) => verse[key]?.et)
    .map((key) => ({
      key,
      name: verse[key]?.author,
      et: verse[key]?.et,
    }));

  // Get commentary for the selected author
  const commentary = authorsWithEt.find((author) => author.key === selectedAuthor);

  return (
    <div className="p-4 space-y-4">
      {/* Slok and Transliteration */}
      <div className="bg-yellow-100 p-4 rounded">
        <h1 className="text-2xl font-bold">{verse.slok}</h1>
        <p className="italic mt-2">{verse.transliteration}</p>
      </div>

      {/* Commentary Section */}
      <div className="bg-white p-4 border rounded shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {commentary?.name || 'Unknown Author'}'s Commentary
          </h2>
          {/* Three-Dot Button */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &#x22EE; {/* Vertical three dots */}
          </button>
        </div>
        <p className="mt-4">{commentary?.et || 'No commentary available.'}</p>

        {/* Dropdown for Author Selection */}
        {showDropdown && (
          <div className="absolute top-16 right-4 w-64 max-h-64 overflow-y-auto bg-white border rounded shadow-lg z-10">
            {authorsWithEt.map((author) => (
              <button
                key={author.key}
                onClick={() => {
                  setSelectedAuthor(author.key);
                  setShowDropdown(false); // Close dropdown after selection
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              >
                {author.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VersePage;
