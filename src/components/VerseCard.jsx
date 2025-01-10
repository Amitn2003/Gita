import React from 'react';
import { Link } from 'react-router-dom';

const VerseCard = ({ chapter, verse }) => {
  return (
    <Link
      to={`/verse/${chapter}/${verse}`}
      className="block p-4 border rounded bg-yellow-100 hover:bg-yellow-200 transition"
    >
      <h3 className="text-lg font-bold">Verse {verse}</h3>
      <p>Click to read more</p>
    </Link>
  );
};

export default VerseCard;
