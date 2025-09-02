export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col items-center">
            {/* Main loading spinner */}
            <div className="relative mb-6">
              <div className="w-16 h-16 border-4 border-cyan-700/20 border-t-cyan-700 rounded-full animate-spin" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-700/10 to-blue-700/10 blur-xl scale-150 animate-pulse" />
            </div>

            {/* Loading text with animation */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 animate-pulse">
                Loading page...
              </h3>
              <p className="text-gray-600 text-sm">
                Please wait while we prepare your content
              </p>
            </div>

            {/* Animated dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.8s' }} />
              <div className="w-2 h-2 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }} />
              <div className="w-2 h-2 bg-cyan-700 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.8s' }} />
            </div>

            {/* Progress bar */}
            <div className="w-full mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-700 to-blue-700 rounded-full loading-bar-progress" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
