import React, { Suspense } from 'react';

interface TemplateProps {
  children: React.ReactNode;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-12 h-12 border-2 border-cyan-700 border-t-transparent rounded-full animate-spin" />
              <div className="absolute inset-0 rounded-full bg-cyan-700/10 blur-xl scale-150 animate-pulse" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Loading content...</h3>
              <div className="flex justify-center space-x-1">
                <div className="w-1 h-1 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-1 h-1 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-1 h-1 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="transition-opacity duration-300 ease-in-out">
      <Suspense fallback={<LoadingFallback />}>
        {children}
      </Suspense>
    </div>
  );
}
