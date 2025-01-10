import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-6 bg-gray-300 rounded"></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
