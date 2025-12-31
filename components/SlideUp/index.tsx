"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        }
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [offset]);

  return (
    <div className="relative opacity-0" ref={ref}>
      {children}
    </div>
  );
}
