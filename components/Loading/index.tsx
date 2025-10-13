import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'pulse' | 'dots' | 'bars';
  showProgress?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  variant = 'spinner',
  showProgress = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const renderSpinner = () => (
    <div className="relative">
      <div
        className={`animate-spin rounded-full border-4 border-cyan-700/20 border-t-cyan-700 ${sizeClasses[size]}`}
      />
      {size === 'xl' && (
        <div className="absolute inset-0 scale-150 animate-pulse rounded-full bg-gradient-to-r from-cyan-700/10 to-blue-700/10 blur-xl" />
      )}
    </div>
  );

  const renderPulse = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`animate-pulse rounded-full bg-cyan-700 ${sizeClasses[size]}`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.5s',
          }}
        />
      ))}
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`animate-bounce rounded-full bg-cyan-700 ${sizeClasses[size]}`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`animate-pulse bg-cyan-700 ${size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : 'w-2'} h-8`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'pulse':
        return renderPulse();
      case 'dots':
        return renderDots();
      case 'bars':
        return renderBars();
      default:
        return renderSpinner();
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 ${className}`}
      role="status"
      aria-label="Loading"
    >
      {renderLoader()}

      {message && (
        <div className="mt-4 text-center">
          <span className="animate-pulse text-sm font-medium text-gray-700">
            {message}
          </span>
        </div>
      )}

      {showProgress && (
        <div className="mt-4 h-1 w-full max-w-xs overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full animate-pulse rounded-full bg-gradient-to-r from-cyan-700 to-blue-700"
            style={{
              width: '60%',
              animation: 'loading-bar 2s ease-in-out infinite',
            }}
          />
        </div>
      )}

      <span className="sr-only">{message}</span>
    </div>
  );
};

export default Loading;
