import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const parts = query.split(':');
    if (parts.length === 2) {
      const ch = parseInt(parts[0], 10);
      const sl = parseInt(parts[1], 10);
      navigate(`/verse/${ch}/${sl}`);
    } else {
      const ch = parseInt(query, 10);
      navigate(`/chapter/${ch}`);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search (e.g., 1 or 1:1)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
