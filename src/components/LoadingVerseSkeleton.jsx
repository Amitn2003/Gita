import React from 'react'

const LoadingVerseSkeleton = () => {
  return (
    <div className="p-6 space-y-8">
  {/* Verse Card Skeleton */}
  <div className="p-6 border border-amber-700 rounded-lg bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 shadow-md animate-pulse">
    <div className="h-8 bg-gray-300 rounded mb-4 w-1/2 mx-auto"></div>
    <div className="h-6 bg-gray-300 rounded mb-4 w-3/4 mx-auto"></div>
  </div>

  {/* Translations Section Skeleton */}
  <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md animate-pulse">
    {/* <div className="h-8 bg-gray-300 rounded mb-4 w-1/2"></div> */}
    <h2 className="text-2xl font-semibold text-amber-900 mb-4">Translations</h2>
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="p-4 border rounded bg-yellow-50 animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>

  {/* Commentaries Section Skeleton */}
  <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md animate-pulse">
    {/* <div className="h-8 bg-gray-300 rounded mb-4 w-1/2"></div> */}
    <h2 className="text-2xl font-semibold text-amber-900 mb-4">Commentaries</h2>
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-4 border rounded bg-yellow-50 animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default LoadingVerseSkeleton