const LoadingSkeleton = () => {
  return (
    <div className="p-4 space-y-6 ">
  {/* Chapter Details Skeleton */}
  <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md animate-pulse">
    <div className="h-8 bg-gray-300 rounded mb-4 w-3/4 mx-auto"></div>
    <div className="h-6 bg-gray-300 rounded mb-2 w-1/2 mx-auto"></div>
    <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
    <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
    <div className="h-6 bg-gray-300 rounded mt-6 w-1/4 mx-auto"></div>
  </div>

  {/* Verse List Skeleton */}
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-amber-900 text-center border-b-2 border-amber-600 pb-2">
      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-52 p-4 border border-amber-600 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default LoadingSkeleton;
