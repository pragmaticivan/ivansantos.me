export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-4 w-full max-w-md">
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center">
            {/* Main loading spinner */}
            <div className="relative mb-6">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-700/20 border-t-cyan-700" />
              <div className="absolute inset-0 scale-150 animate-pulse rounded-full bg-gradient-to-r from-cyan-700/10 to-blue-700/10 blur-xl" />
            </div>

            {/* Loading text with animation */}
            <div className="mb-4 text-center">
              <h3 className="mb-2 animate-pulse text-xl font-semibold text-gray-800">
                Loading page...
              </h3>
              <p className="text-sm text-gray-600">
                Please wait while we prepare your content
              </p>
            </div>

            {/* Animated dots */}
            <div className="flex justify-center space-x-2">
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-cyan-700"
                style={{ animationDelay: '0s', animationDuration: '0.8s' }}
              />
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-cyan-700"
                style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}
              />
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-cyan-700"
                style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}
              />
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="loading-bar-progress h-full rounded-full bg-gradient-to-r from-cyan-700 to-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
