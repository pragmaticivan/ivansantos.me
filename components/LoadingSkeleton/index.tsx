import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  showAvatar?: boolean;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  lines = 3,
  showAvatar = false,
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {showAvatar && (
        <div className="mb-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-gray-300"></div>
            <div className="h-3 w-24 rounded bg-gray-300"></div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-5/6 rounded bg-gray-300"></div>
        {Array.from({ length: lines - 2 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-gray-300"
            style={{ width: `${Math.random() * 40 + 60}%` }}
          ></div>
        ))}
      </div>

      <div className="mt-6 flex space-x-4">
        <div className="h-10 w-20 rounded bg-gray-300"></div>
        <div className="h-10 w-24 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
