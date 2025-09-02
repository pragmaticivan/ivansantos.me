import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Handle route changes
    setIsLoading(true);
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Initial mount animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-md w-full mx-4">
          <div className="flex flex-col items-center justify-center p-8 min-h-[200px] bg-white rounded-lg shadow-sm">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-cyan-700 border-t-transparent rounded-full animate-spin" />
              <div className="absolute inset-0 rounded-full bg-cyan-700/10 blur-xl scale-150 animate-pulse" />
            </div>
            <div className="mt-6 text-center">
              <span className="text-lg font-medium text-gray-800 animate-pulse">
                Transitioning...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`page-transition ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95'
      } ${className}`}
      style={{
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
