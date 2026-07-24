import type React from "react";
import { Suspense } from "react";
import Loading from "./loading";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="transition-opacity duration-300 ease-in-out">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
