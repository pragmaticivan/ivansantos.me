import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: We want to trigger this effect when pathname changes
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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-4 w-full max-w-md">
          <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm">
            <div className="relative">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan-700 border-t-transparent" />
              <div className="absolute inset-0 scale-150 animate-pulse rounded-full bg-cyan-700/10 blur-xl" />
            </div>
            <div className="mt-6 text-center">
              <span className="animate-pulse font-medium text-gray-800 text-lg">
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
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-95 opacity-0"
      } ${className}`}
      style={{
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
