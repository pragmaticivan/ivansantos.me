import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      role="status"
      aria-label="Loading"
    >
      <div
        className={`animate-spin rounded-full border-2 border-cyan-700 border-t-transparent ${sizeClasses[size]}`}
        aria-hidden="true"
      />
      <span className="mt-2 text-sm text-gray-600">{message}</span>
      <span className="sr-only">{message}</span>
    </div>
  );
};

export default Loading;
