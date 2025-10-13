import React, { Suspense } from 'react';

interface TemplateProps {
  children: React.ReactNode;
}

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-700 border-t-transparent" />
              <div className="absolute inset-0 scale-150 animate-pulse rounded-full bg-cyan-700/10 blur-xl" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-lg font-medium text-gray-800">
                Loading content...
              </h3>
              <div className="flex justify-center space-x-1">
                <div
                  className="h-1 w-1 animate-bounce rounded-full bg-cyan-700"
                  style={{ animationDelay: '0s' }}
                />
                <div
                  className="h-1 w-1 animate-bounce rounded-full bg-cyan-700"
                  style={{ animationDelay: '0.1s' }}
                />
                <div
                  className="h-1 w-1 animate-bounce rounded-full bg-cyan-700"
                  style={{ animationDelay: '0.2s' }}
                />
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
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </div>
  );
}
