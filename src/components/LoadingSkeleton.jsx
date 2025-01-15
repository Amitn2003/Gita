const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">

      {[...Array(18)].map((_, index) => (

        <div key={index} className="h-32 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg shadow-md" />

      ))}

    </div>
  );
};

export default LoadingSkeleton;
