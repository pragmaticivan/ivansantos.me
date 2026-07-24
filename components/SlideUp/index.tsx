"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "-8% 0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    setIsEnhanced(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div
      className={`${styles.reveal} ${isEnhanced ? styles.enhanced : ""} ${
        isVisible ? styles.visible : ""
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
}
