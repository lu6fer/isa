"use client";
import { useState, useRef, useEffect } from "react";


export const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const callBack: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    }
  }, [containerRef, options]);

  return [containerRef, isVisible] as const;
}
